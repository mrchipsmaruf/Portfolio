import React from 'react';
import Banner from '../../Components/Banner';
import AboutMe from './About';
import Skills from '../../Components/Skills';
import Projects from './Projects';
import Contact from './Contact';
import Services from './Services';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Home = () => {

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollTo = params.get("scroll");

        if (scrollTo) {
            setTimeout(() => {
                const el = document.getElementById(scrollTo);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [location]);

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