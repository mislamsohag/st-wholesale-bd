import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navber from '../../Shared/Header/Navber/Navber';
import Slider from '../../Shared/Header/Slider/Slider';
import OurProducts from '../OurProduts/OurProducts';

const Home = () => {
    return (
        <>
            <Navber></Navber>
            <Slider></Slider>
            <OurProducts></OurProducts>
            <Footer></Footer>
        </>
    );
};

export default Home;