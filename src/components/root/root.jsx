import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sideber from '../SideNavber/Sideber';
import './root.css'
const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <Sideber></Sideber>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;