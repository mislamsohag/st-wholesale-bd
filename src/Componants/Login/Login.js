import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import Navber from '../../Shared/Header/Navber/Navber';

const Login = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="container w-50 mx-auto">
                <h2 className='text-3xl text-center my-2'>LOGIN</h2>
                <form>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                        <input type="text" placeholder="Enter Valid Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    {/* {errors?.email && <p className="text-danger">{errors.email}</p>} */}

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                        <input type="password" placeholder="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    {/* {errors?.password && <p className="text-danger">{errors.password}</p>} */}

                    <button className="btn btn-primary">Login</button>
                    <ToastContainer />

                    <p className="text-danger">Don't have an account? <Link to="/register"><span className="text-primary">Register Please</span></Link> </p>
                </form>
            </div>



        </div>
    );
};

export default Login;