import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import { Footer, Navbar, Tabs } from '../components';

const Layout = () => {
    return (
        <div>
            <div className='px-12 pt-3 bg-soi-green'>
                <Tabs />
            </div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>

    );
}

export default Layout;