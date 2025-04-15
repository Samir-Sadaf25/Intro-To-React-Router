import React from 'react';

const Sideber = () => {
    return (
        <aside style={{ width: "", backgroundColor: "#f0f0f0", height: "", padding: "20px" }}>
            <nav>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#home" style={{ textDecoration: "none", color: "#333" }}>Home</a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#about" style={{ textDecoration: "none", color: "#333" }}>About</a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="#services" style={{ textDecoration: "none", color: "#333" }}>Services</a>
                    </li>
                    <li>
                        <a href="#contact" style={{ textDecoration: "none", color: "#333" }}>Contact</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sideber;