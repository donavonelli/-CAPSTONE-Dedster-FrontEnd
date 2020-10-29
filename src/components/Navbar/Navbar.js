import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import './Navbar.css'


const Navbar = function (props) {
    const logged_out_nav = (
        <ul>
            <li onClick={()=> props.display_form('login')}>Login</li>
            <li onClick={()=> props.display_form('signup')}>Sign Up</li>
        </ul>
    )

    const logged_in_nav = (
        <ul>
            <li onClick={props.handle_logout}>Logout</li>
        </ul>
    )
    return (<div>{props.logged_in ? logged_in_nav : logged_out_nav}
                <nav className="navbar">
                    <h5><NavLink to='/'>Home</NavLink></h5>
                    <h5><NavLink to='/services'>Services</NavLink></h5>        <h5><NavLink to='/profile'>Profile</NavLink></h5>
                    <h5><NavLink to='/about'>About</NavLink></h5>
                    <h5><NavLink to='/contact'>Contact</NavLink></h5>
                </nav>
    
    </div>)
}
        // return (
        //     <div>
        //     </div>
        // )

export default Navbar

Navbar.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handle_logout: PropTypes.func.isRequired,
}