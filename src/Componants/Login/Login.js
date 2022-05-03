import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import Navber from '../../Shared/Header/Navber/Navber';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../Firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleLogin = (event) => {
        event.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    return (
        <div>
            <Navber></Navber>
            <div className="container w-50 mx-auto">
                <h2 className='text-3xl text-center my-2'>LOGIN</h2>
                <form onSubmit={handleLogin}>

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
                <div className='d-flex align-items-center'>
                    <hr className='w-50 mx-auto' />
                    <span>or</span>
                    <hr className='w-50 mx-auto' />
                </div>
                <div className='container text-center'>
                    <button className='btn btn-info' onClick={handleGoogleSignIn}>Google Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;