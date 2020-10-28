import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = function () {


    return (
        <div>
        <nav className="navbar">
            <h5><NavLink to='/'>Home</NavLink></h5>
            <h5><NavLink to='/services'>Services</NavLink></h5>
            <h5>Profile</h5>
            <h5><NavLink to='/about'>About</NavLink></h5>
            <h5>Contact</h5>
        </nav>
        </div>
    )
}

export default Navbar