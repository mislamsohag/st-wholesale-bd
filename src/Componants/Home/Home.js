import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navber from '../../Shared/Header/Navber/Navber';
import Slider from '../../Shared/Header/Slider/Slider';

const Home = () => {
    return (
        <>
            <Navber></Navber>
            <Slider></Slider>
            <h1>Hello This is Home Page</h1>


            <Footer></Footer>
        </>
    );
};

export default Home;