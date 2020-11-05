import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = function (props) {
    return (
                <nav className="navbar">
                    <h3><NavLink to='/' className='navbarlink'>Home</NavLink></h3>
                    <h3><NavLink to='/services' className='navbarlink'>Services</NavLink></h3>
                    <h3><NavLink to='/posts' className='navbarlink'>Posts</NavLink></h3>
                    <h3><NavLink to='/profile' className='navbarlink'>Profile</NavLink></h3>
                    <h3><NavLink to='/about' className='navbarlink'>About</NavLink></h3>
                    <h3><NavLink to='/contact' className='navbarlink'>Contact</NavLink></h3>
                </nav>
    
    )
}

export default Navbar

