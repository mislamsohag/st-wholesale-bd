import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../Firebase.init";
import { Link, useNavigate } from 'react-router-dom';
import Spinner from "../../../Shared/Spinner/Spinner";
import Navber from "../../../Shared/Header/Navber/Navber";
import SocialLogin from "../SocialLogin/SocialLogin";





const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Spinner></Spinner>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
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
                                            <form onSubmit={handleRegister}>

                                                <div className="form-outline flex-fill mb-4">
                                                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    <input type="text" name="name" id="form3Example1c" className="form-control" />
                                                </div>

                                                <div className="form-outline flex-fill mb-4">
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    <input type="email" name="email" id="form3Example3c" className="form-control" required />
                                                </div>

                                                <div className="form-outline flex-fill mb-4">
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    <input id="form3Example4c" className="form-control" name="password" required />
                                                </div>

                                                <div className="form-outline flex-fill mb-4">
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                    <input id="form3Example4cd" className="form-control" required />
                                                </div>


                                                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                                                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept our Terms and Conditions</label>
                                                <input
                                                    disabled={!agree}
                                                    className='w-50 mx-auto btn btn-primary mt-2'
                                                    type="submit"
                                                    value="Register" />
                                            </form>
                                            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                                            <SocialLogin></SocialLogin>
                                            <p className='text-center'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>



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