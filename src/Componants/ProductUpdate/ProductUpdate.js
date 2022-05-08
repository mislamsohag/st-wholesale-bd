import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase.init';
import { toast, ToastContainer } from "react-toastify";
import Navber from "../../Shared/Header/Navber/Navber";
import 'react-toastify/dist/ReactToastify.css';

const ProductUpdate = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = (`https://secure-chamber-93784.herokuapp.com/ourProducts/${id}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    // console.log(id)

    const handleProductUpdate = (event) => {
        event.preventDefault();
        const image = event.target.imgLink.value;
        const description = event.target.pDetails.value;
        const quantity = event.target.pQuantity.value;
        const price = event.target.pPrice.value;

        const updateProduct = {
            image, description, quantity, price
        };
        // console.log(image, description, quantity, price);

        const url = (`https://secure-chamber-93784.herokuapp.com/ourProducts/${id}`)

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (!data.success) {
                    return toast.error(data.error)
                } else {
                    toast.success(data.message);
                    event.target.reset();
                    <ToastContainer />
                }
            })
    }

    return (
        <>
            <Navber></Navber>
            <div className='container'>
                <h1 className='text-center my-3'>update:{product.name} </h1>
                <div className='w-50  mx-auto'>

                    <form onSubmit={handleProductUpdate} >
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

