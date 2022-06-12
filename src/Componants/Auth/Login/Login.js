import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navber from '../../../Shared/Header/Navber/Navber';
import Footer from '../../../Shared/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../Firebase.init';
import Spinner from '../../../Shared/Spinner/Spinner';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Spinner></Spinner>
    }

    if (user) {
        const url = 'https://secure-chamber-93784.herokuapp.com/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("accessToken", data.token)
                navigate(from, { replace: true });
            });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <>
            <Navber></Navber>
            <div className='container w-50 mx-auto'>
                <h3 title="Login"></h3>
                <h2 className='text-center my-2'>LOGIN</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                        <input type="text" placeholder="Enter Valid Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" required>Password</label>

                        <input type="password" placeholder="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} required />
                    </div>

                    <button className="btn btn-primary mb-3" type="submit">
                        LOGIN
                    </button>
                </form>
                {errorElement}
                <p>Aren't You Registered? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

                <ToastContainer />
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;