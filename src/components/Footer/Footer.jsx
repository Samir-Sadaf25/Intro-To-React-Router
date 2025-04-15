import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#f8f9fa", padding: "10px", textAlign: "center" }}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;