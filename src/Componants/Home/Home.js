import React from 'react';
import Navber from '../../Shared/Header/Navber/Navber';
import Slider from '../../Shared/Header/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Slider></Slider>
            <h1>Hello This is Home Page</h1>
        </div>
    );
};

export default Home;