import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';

const HomeLayout = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;
