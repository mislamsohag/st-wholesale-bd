// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";
import Navber from "../../Shared/Header/Navber/Navber";

const ProductUpdate = () => {
    const [user, loading, error] = useAuthState(auth);
    // const { _id } = useParams();
    // const [details, setDetails] = useState([]);
    // const [productDetails, setProductDetail] = useState([]);


    // useEffect(() => {
    //     fetch("http://localhost:5000/ourProducts")
    //         .then(res => res.json())
    //         .then(data => setDetails(data))
    // }, []);

    // // console.log(_id, details)

    // useEffect(() => {
    //     if (details.length > 0) {
    //         const matchData = details.find(detail => detail._id === _id)
    //         setProductDetail(matchData)
    //     }
    //     console.log(productDetails)

    // }, [details, _id, productDetails]);


    const handleProductUpdate = (event) => {
        event.preventDefault();
        const image = event.target.imgLink.value;
        const description = event.target.pDetails.value;
        const quantity = event.target.pQuantity.value;
        const price = event.target.pPrice.value;
        console.log(image, description, quantity, price);

        const url = 'http://localhost:5000/uploadItem';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                image,
                description,
                quantity,
                price
            }),
            headers: {
                'authorization': `${user.email} ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.success) {
                    return toast.error(data.error)
                } else {
                    toast.success(data.message);
                    event.target.reset(); //মূলত এর মাধ্যমে ইনপুট ফিল্ড খালি করে।
                }
            });
    }

    return (
        <>
            <Navber></Navber>
            <div className='container'>
                <h2 className='text-center'>Products Update Form</h2>
                <div className='w-50  mx-auto'>
                    <form onSubmit={handleProductUpdate}>

                        <div className="mb-3">
                            <label className="form-label">Image Link</label>

                            <input type="text" className="form-control" name="imgLink" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="floatingTextarea2">Product Details</label>

                            <textarea className="form-control" id="floatingTextarea2" name="pDetails" style={{ height: 100 }} ></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Product Quantity</label>

                            <input type="text" className="form-control" name="pQuantity" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Price</label>

                            <input type="text" className="form-control" name="pPrice" required />
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductUpdate;