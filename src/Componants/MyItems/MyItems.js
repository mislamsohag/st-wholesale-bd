import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navber from '../../Shared/Header/Navber/Navber';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const axios = require('axios').default;


const MyItems = () => {
    const Navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/ourProducts/${email}`

            try {
                const { data } = await axios.get(url);
                setItems(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    Navigate('/login')
                }
            }
        }
        getItems();
    }, [user])
    return (
        <>
            <Navber></Navber>

            <h2>My Items page {items.length}</h2>
            {
                items?.map(item => <div key={item._id}>
                    <h3>Item Name : {items.name}</h3>
                </div>)
            }

            <Footer></Footer>
        </>
    );
};

export default MyItems;