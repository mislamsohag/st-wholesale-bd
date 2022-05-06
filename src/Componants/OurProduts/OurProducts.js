import React, { useEffect, useState } from 'react';
import Navber from '../../Shared/Header/Navber/Navber';

const OurProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ourProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
        console.log(products);
    }, [])
    return (
        <div>
            <Navber></Navber>
            <section className='container text-center'>
                <h1>Our Products: {products.length}</h1>
                <div className='row'>
                    {
                        products?.map(product => (
                            <div className='col-sm-12 col-md-6 col-lg-4 g-3' key={product._id}>
                                <div className="card" >
                                    <img src={product.image} className="card-img-top" alt="Product Image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default OurProducts;