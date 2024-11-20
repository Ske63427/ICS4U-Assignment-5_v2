//import { useState } from "react";
import './header.css'

function header() {

    return (
        <div className="header">
            <div className="logo">
                <img id="logo" src="./src/321 Movies Logo.png"/>
            </div>
            <div className="search">
            <input type="text" placeholder="Search"/>
            </div>
            <div className="account">
                <a className="button" id="login" href="#">Login</a>
                <a className="button" id="register" href="#">Register</a>
            </div>
        </div>
    )
}

export default header