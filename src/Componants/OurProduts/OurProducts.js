import Navber from '../../Shared/Header/Navber/Navber';
import { Link, NavLink } from 'react-router-dom';
// import useProducts from '../../Hooks/useProducts';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const OurProducts = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(6);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/ourProducts?limit=${limit}&pageNumber=${pageNumber}`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [limit, pageNumber]);



    return (
        <div>
            <Navber></Navber>
            <section className='container text-center'>

                <div className='row'>
                    {
                        products?.length ? products?.map(product => (
                            <div className='col-sm-12 col-md-6 col-lg-4 g-3' key={product._id}>
                                <NavLink className='nav-link' to="/pDetails">
                                    <div className="card" >
                                        <img src={product.image} className="card-img-top" alt="Product Image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <div className='d-flex d-flex justify-content-between text-body mt-3'>
                                                <p className='m-0 p-0'>৳ {product.price}</p>
                                                <p className='m-0 p-0'>Stock : </p>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        )) : <div>No Product Found</div>
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
        </div>
    );
};

export default OurProducts;