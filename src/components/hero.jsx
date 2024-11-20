//import { useState } from "react";
import './hero.css'

function hero() {

    return (
        <div className="hero">
            <div className="plan" id="plan-1">
                <h3>Paid With Ads</h3>
                <h4>$6.99/month</h4>
                <p>2 Devices, 1080p HD, 5.1 Audio</p><br/>
                <a href="plan.html">Pay Now</a>
            </div>
            <div className="plan" id="plan-2">
                <h3>Standard</h3>
                <h4>$12.99/month</h4>
                <p>3 Devices, 4K, 5.1 Audio</p><br/>
                <a href="plan.html">Pay Now</a>
            </div>
            <div className="plan" id="plan-3">
                <h3>Premium</h3>
                <h4>$18.99/month</h4>
                <p>4 Devices, 4K, Dolby Atmos</p><br/>
                <a href="plan.html">Pay Now</a>
            </div>
        </div>
    )
}

export default hero