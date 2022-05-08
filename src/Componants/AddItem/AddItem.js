import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase.init';
import Navber from '../../Shared/Header/Navber/Navber';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleProductUpload = (event) => {
        event.preventDefault();
        // const id = event.target.pId.value;
        const name = event.target.pName.value;
        const image = event.target.imgLink.value;
        const description = event.target.pDetails.value;
        const quantity = event.target.pQuantity.value;
        const supplier = event.target.sName.value;
        const price = event.target.pPrice.value;
        // console.log(id, name, image, description, quantity, supplier, price);

        const url = 'http://:5000/uploadItem';
        //সার্ভার সাইটে ডাটা পোস্ট করা
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                // id,
                name,
                image,
                description,
                quantity,
                supplier,
                price
            }),
            headers: {
                'authorization': `${user.email} ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {

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
                <h2 className='text-center'>New Products Upload Form</h2>
                <div className='w-50  mx-auto'>

                    <form onSubmit={handleProductUpload}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>

                            <input type="text" className="form-control" name="pName" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image Link</label>

                            <input type="text" className="form-control" name="imgLink" required />
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

                        <div className="mb-3">
                            <label className="form-label">Supplier Name</label>

                            <input type="text" className="form-control" name="sName" required />
                        </div>

                        <button type="submit" className="btn btn-primary">Upload</button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddItem;