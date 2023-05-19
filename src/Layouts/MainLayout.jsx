import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
            <NavigationBar />
            <div style={{minHeight: "40vh"}}>
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </>
    );
};

export default MainLayout;