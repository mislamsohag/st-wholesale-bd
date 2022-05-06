import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navber from '../../Shared/Header/Navber/Navber';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../Firebase.init';


const Login = () => {
    const [signInWithEmail, signInWithEmailUser, signInWithEmailLoading, signInWithEmailError] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleErr] = useSignInWithGoogle(auth);

    const [user, loading, error] = useAuthState(auth);

    const [userValue, setUserValue] = useState({
        email: "",
        password: "",
    })
    const [err, setErr] = useState({
        email: "",
        password: "",
    })

    //email validation 
    const handleEmail = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);

        if (validEmail) {
            setUserValue({ ...userValue, email: event.target.value })
            setErr({ ...err, email: "" })
        } else {
            setErr({ ...err, email: "Invalid email format" })
            setUserValue({ ...userValue, email: "" })
        }
    }

    //password validation
    const handlePassword = (event) => {
        const passwordRegex = /.{8,}/;
        const validPassword = passwordRegex.test(event.target.value);

        if (validPassword) {
            setUserValue({ ...userValue, password: event.target.value });
            setErr({ ...err, password: "" })
        } else {
            setErr({ ...err, password: "Please enter minmum 8 characters!" })
            setUserValue({ ...userValue, password: "" })
        }
    }

    //login and page reload control
    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmail(userValue.email, userValue.password);
    }

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    if (user) {
        const url = 'http://localhost:5000/login'
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

    useEffect(() => {
        if (signInWithEmailUser) {
            navigate(from)
        }
    }, [signInWithEmailUser, googleUser]);

    useEffect(() => {
        if (err) {
            switch (err?.code) {
                case "auth/invalid-email": toast("Your email is invalid,  provide a valid email please!");
                    break;

                case "auth/invalid-password": toast("Your password is wrong");
                    break;

                // default: toast("something went wrong")
            }
        }
    }, [signInWithEmailError, googleErr])

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

                        <input type="text" placeholder="Enter Valid Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail} />
                    </div>

                    {err?.email && <p className="text-danger">{err.email}</p>}

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                        <input type="password" placeholder="password" className="form-control" id="exampleInputPassword1" onChange={handlePassword} />
                    </div>

                    {err?.password && <p className="text-danger">{err.password}</p>}

                    <button className="btn btn-primary">Login</button>
                    <ToastContainer />
                    <p className="text-danger">Don't have an account? <Link to="/register"><span className="text-primary">Register Please</span></Link> </p>
                </form>
                <div className='d-flex'>
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