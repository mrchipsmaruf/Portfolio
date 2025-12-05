import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import Banner from '../../Components/Banner';
import Services from '../../Components/Services';
import AboutMe from './About';
import Skills from '../../Components/Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;