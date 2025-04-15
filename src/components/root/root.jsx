import React from 'react';
import Header from '../header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sideber from '../SideNavber/Sideber';
import './root.css'
const Root = () => {
    
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <Sideber></Sideber>
                {isNavigating && <h3>Loading....</h3>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;