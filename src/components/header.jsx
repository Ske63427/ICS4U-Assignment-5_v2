//import { useState } from "react";

function header() {

    return (
        <div>
            <div class="logo">
                <img id="logo" src="321 Movies Logo.png"/>
            </div>
            <div class="search">
            <input type="text" placeholder="Search"/>
            </div>
            <div class="account">
                <a class="button" id="login" href="login.html">Login</a>
                <a class="button" id="register" href="register.html">Register</a>
            </div>
        </div>
    )
}

export default header