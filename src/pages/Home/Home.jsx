import React from 'react';
import Banner from './Banner';
import Shop from './Shop';
import Gallery from './Gallery';
import Newsletter from './Newsletter';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Banner />
            <Gallery />
            <Shop />
            <Newsletter />
            <Contact />
        </>
    );
};

export default Home;