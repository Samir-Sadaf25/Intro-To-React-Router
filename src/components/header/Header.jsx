import React from 'react';
import { Link, NavLink } from 'react-router';
import './header.css'
const Header = () => {
    return (
        <div>
            <h1>this is header</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="mobile">Mobiles</NavLink>
                <NavLink to="Laptops">Laptops</NavLink>
            </nav>
        </div>
    );
};

export default Header;