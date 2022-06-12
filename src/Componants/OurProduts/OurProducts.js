import Navber from '../../Shared/Header/Navber/Navber';
import { Link, NavLink } from 'react-router-dom';
// import useProducts from '../../Hooks/useProducts';
import { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';



const OurProducts = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(6);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        fetch(`https://secure-chamber-93784.herokuapp.com/ourProducts?limit=${limit}&pageNumber=${pageNumber}`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [limit, pageNumber]);

    const handleProductDetail = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {
            const url = (`https://secure-chamber-93784.herokuapp.com/ourProducts/${id}`)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining);
                    }
                    console.log("You Product are deleted");
                })
        }
    }

    return (
        <>
            <section className='container text-center'>
                <div className='row'>
                    {
                        products?.length ? products?.map(product =>
                            <Link to={`/${product?._id}`} key={product._id} className='col-sm-12 col-md-6 col-lg-4 g-3'>
                                <div className="card h-100" >
                                    <img src={product.image} className="card-img-top" alt="Product Image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <div className='d-flex d-flex justify-content-between text-body mt-3'>
                                            <p className='m-0 p-0'>৳ {product.price}</p>

                                            <p className='m-0 p-0'>Stock : {product.quantity} </p>
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        ) : <div>No Product Found</div>
                    }
                </div>
                <div className='d-flex justify-content-end'>
                    {
                        [...Array(5).keys()].map(number => <div key={number.toString()} onClick={() => setPageNumber(number)} className={`mx-3 border border-dark px-3 py-1 ${pageNumber === number ? "bg-black text-white" : ""} `}>{number + 1}</div>)
                    }
                    <select onChange={(event) => setLimit(event.target.value)} >
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="18">18</option>
                        <option value="24">24</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </section>
        </>
    );
};

export default OurProducts;