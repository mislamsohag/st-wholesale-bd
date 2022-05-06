import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navber from '../../Shared/Header/Navber/Navber';

const ProductDetails = () => {

    const { _id } = useParams();
    const [details, setDetails] = useState([]);
    const [productDetails, setProductDetail] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/ourProducts")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    // console.log(_id, details)

    useEffect(() => {
        if (details.length > 0) {
            const matchData = details.find(detail => detail._id === _id)
            setProductDetail(matchData)
        }
        console.log(productDetails)

    }, [details, _id, productDetails]);

    return (
        <>
            <Navber></Navber>
            <div className='container'>

                <h1 className='text-center'>Product details</h1>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={productDetails.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{productDetails.name}</h3>
                                <p className="card-text"> Proroduct description : {productDetails.description}</p>
                                <p>Suppliyer: {productDetails.supplier}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;