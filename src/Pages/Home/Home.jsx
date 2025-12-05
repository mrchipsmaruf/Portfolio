import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import Banner from '../../Components/Banner';
import Services from '../../Components/Services';
import AboutMe from './About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;