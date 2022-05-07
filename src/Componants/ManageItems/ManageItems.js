import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navber from "../../Shared/Header/Navber/Navber";


const ManageItems = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(6);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/ourProducts?limit=${limit}&pageNumber=${pageNumber}`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [limit, pageNumber]);

    const handleProductDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {

            console.log("You are delete thisi Product", id)
        }
    }

    return (
        <div>
            <Navber></Navber>
            <section className='container'>
                <div className='row'>
                    {
                        products?.length ? products?.map(product =>
                            <div key={product._id} className='col-sm-12 col-md-6 col-lg-4 g-3'>
                                <div className="card h-100" >
                                    <img src={product.image} className="card-img-top" alt="Product Image" />
                                    <div className="card-body">
                                        <h3 className="card-title">{product.name}</h3>

                                        <p className="card-text">{product.description}</p>

                                        <p>Suppliyer:<span className='text-primary'> {product.supplier}</span></p>

                                        <p className='bg-light rounded py-1 px-3'>৳ : {product.price}</p>

                                        <p className='bg-light rounded py-1 px-3'>Stock : </p>

                                        <div className='d-flex d-flex align-items-center justify-content-between text-body mt-3'>

                                            <Link className='btn btn-primary' to={product._id}>Update Product</Link>

                                            <button onClick={() => handleProductDelete(product._id)} className='btn btn-danger' >Delete Product</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <div>No Product Found</div>
                    }
                </div>
                <div className='d-flex justify-content-end my-3'>
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

export default ManageItems;