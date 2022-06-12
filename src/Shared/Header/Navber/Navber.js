import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.png';
import { signOut } from 'firebase/auth';
import auth from './../../../Firebase.init';

const Navber = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img height={30} src={logo} alt="..." /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/manageItems">Manage Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addItem">Add Item</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/myItems">My Items</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {
                                user ? <span>{user.displayName}
                                    <button className='btn btn-light' onClick={handleSignOut} >Log Out</button>
                                </span> : <Link className="nav-link" to="/login">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navber;