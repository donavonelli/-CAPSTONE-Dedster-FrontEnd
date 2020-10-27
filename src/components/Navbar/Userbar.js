import React from "react";

import './Userbar.css'

const Userbar = function () {


    return (
        <div>
        <nav className="userbar">
            <h4>Current College:</h4>
            <div className="change_college">
            <h6>Wrong?</h6>
            <h6>Click here to change</h6>
            </div>
            <h4 className="signup">Signup/</h4>
            <h4 className="login">Login</h4>
        </nav>
        </div>
    )
}

export default Userbar