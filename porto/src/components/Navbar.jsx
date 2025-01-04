import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu state
    };

    return (
        <nav className="navbar">
            <div className="brand">Suvarna</div>
            <button className="menu-btn" onClick={toggleMenu}>
                <FontAwesomeIcon 
                    icon={isOpen ? faTimes : faBars} // Toggle between faBars and faTimes
                    style={{ fontSize: "1.8rem", color: 'white' }} 
                />
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/Hero" className="ho">Home</Link></li> {/* Link to Home */}
                <li><Link to="/Skills" className="ho">Skills</Link></li> {/* Link to Skills */}
                <li><Link to="/Project" className="ho">Projects</Link></li> {/* Link to Projects */}
                <li><Link to="/Footer" className="ho">Contact</Link></li> {/* Link to Contact */}
                <div>
                    <a href="https://drive.google.com/file/d/1golGZcwPjf5WVUU2HqEr6c11AIUShZA2/view?usp=drive_link" className="resume-button" target="_blank" rel="noopener noreferrer">
                        See Resume
                    </a>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
