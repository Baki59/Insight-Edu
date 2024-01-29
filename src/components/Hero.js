import "./HeroStyle.css";
import React from "react";
import Banner from "../assets/Banner.jpg"
import Tagline from "../assets/Group 43.png"

function Hero(){
    return (
        
        <div className="hero">
            <img alt="HeroImg" src={Banner} className="hero-cover-image"/>
            <img alt="TagImg" src={Tagline} className="hero-tagline-image"/>
            
            <form className="hero-login">
            <div className="hero-text">
                For Details...
            </div>
            <div>
                <input className="phone" placeholder="Phone" type="text" name="name" />
            </div>
            <div>
                <input className="hero-email" placeholder="Email" type="text" name="name" />
            </div>
            <input className="hero-submit" type="submit" value="SignUp" />
            </form>

        </div>
        
    )
}

export default Hero;