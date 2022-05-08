import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import Navber from '../../../Shared/Header/Navber/Navber';




const Register = () => {
    const [agree, setAgree] = useState(false);

    const [userValue, setUserValue] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
    });
    const [err, setErr] = useState({
        email: "",
        password: "",
    });

    const [showPass, setShowPass] = useState(false);

    const [
        createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleName = (event) => {
        const name = test(event.target.value);

    };

    const handleEmail = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);

        if (validEmail) {
            setUserValue({ ...userValue, email: event.target.value });
            setErr({ ...err, email: "" });
        } else {
            setErr({ ...err, email: "Invalid email" });
            setUserValue({ ...userValue, email: "" });
        }
    };

    const handlePassword = (event) => {
        const passwordRegex = /.{8,}/;
        const validPassword = passwordRegex.test(event.target.value);

        if (validPassword) {
            setUserValue({ ...userValue, password: event.target.value });
            setErr({ ...err, password: "" });
        } else {
            setErr({ ...err, password: "Minimum 8 characters!" });
            setUserValue({ ...userValue, password: "" });
        }
    };

    const handleConfirmPassword = (event) => {
        if (event.target.value === userValue.password) {
            setUserValue({ ...userValue, confirmPass: event.target.value });
            setErr({ ...err, password: "" });
        } else {
            setErr({ ...err, password: "Password's dosn't match" });
            setUserValue({ ...userValue, confirmPass: "" });
        }
    };

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email dosn't work, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Your password is Wrong");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [hookError]);

    // const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }


    const handleRegister = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, userValue.email, userValue.password);

        const agree = event.target.terms.checked;
        // updateProfile({ displayName: name });

        navigate('/login');
    }

    return (
        <>
            <Navber></Navber>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black rounded">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Please Register</p>
                                            <form onSubmit={handleRegister} className="mx-1 mx-md-4">

                                                <div className="form-outline flex-fill mb-4">
                                                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    <input type="text" onChange={handleName} id="form3Example1c" className="form-control" />
                                                </div>

                                                <div className="form-outline flex-fill mb-4">
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    <input type="email" onChange={handleEmail} id="form3Example3c" className="form-control" />
                                                </div>

                                                {err?.email && <p className="error-message">{err.email}</p>}


                                                <div className="form-outline flex-fill mb-4">

                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>

                                                    <input type={showPass ? "text" : "password"} id="form3Example4c" className="form-control" onChange={handlePassword} />
                                                </div>


                                                {err?.password && <p className="error-message">{err.password}</p>}


                                                <div className="form-outline flex-fill mb-4">
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                    <input onChange={handleConfirmPassword} type={showPass ? "text" : "password"} id="form3Example4cd" className="form-control" />
                                                </div>


                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input onClick={() => setAgree(!agree)} className="form-check-input me-2" type="checkbox" name="terms" id="form2Example3c" />

                                                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">I agree all statements in Terms and Conditions</label>
                                                </div>

                                                <input
                                                    disabled={!agree}
                                                    className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 btn btn-primary"
                                                    type="submit"
                                                    value="Register" />

                                            </form>
                                            <p className='text-center'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

                                            {/* <SocialLogin></SocialLogin> */}

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Register;