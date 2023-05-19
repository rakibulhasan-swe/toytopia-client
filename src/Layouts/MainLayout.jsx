import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <>
            <NavigationBar />
            <div style={{minHeight: "40vh"}}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;