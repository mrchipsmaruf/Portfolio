import React from 'react';
import Banner from '../../Components/Banner';
import AboutMe from './About';
import Skills from '../../Components/Skills';
import Projects from './Projects';
import Contact from './Contact';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner />
            <div id="services"><Services /></div>
            <div id="projects"><Projects /></div>
            <div id="about"><AboutMe /></div>
            <div id="skills"><Skills /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
};

export default Home;