import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import './Userbar.css'

const Userbar = function (props) {
    const logged_out_nav = (<div>
        <h4 className="signup"><NavLink to='/signup'className="signup">Signup</NavLink></h4>
        <h4 id='slash'>/</h4>
        <h4 className="login"><NavLink to='/login'className="login">Login</NavLink></h4>
        </div>
    )

    const logged_in_nav = (
            <h4 onClick={props.handle_logout}>Logout</h4>
    )

    return (
        <div>
        <nav className="userbar">
            <h4>Current College:</h4>
            <div className="change_college">
            <h6>Wrong?</h6>
            <h6>Click here to change</h6>
            </div>
            {props.logged_in ? logged_in_nav : logged_out_nav}
        </nav>
        </div>
    )
}

export default Userbar

Userbar.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handle_logout: PropTypes.func.isRequired,
}