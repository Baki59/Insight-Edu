import "./HeroStyle.css";
import React from "react";
import Banner from "../assets/Banner.jpg"
import Tagline from "../assets/Group 43.png"
import { TextInput } from "flowbite-react";

function Hero(){
    return (
        
        <div className="hero">
            <img alt="HeroImg" src={Banner} className="hero-cover-image"/>
            
            <img alt="TagImg" src={Tagline} className="hero-tagline-image"/>
            
            {/* <form className="hero-login">
                <div className="hero-text">
                    For Details...
                </div>
                <div className="hero-phone">
                    <input placeholder="Phone" type="text" name="name" />
                </div>
                <div className="hero-email">
                    <input  placeholder="Email" type="text" name="name" />
                </div>
                <div className="hero-submit">
                    Submit
                </div>
            </form> */}

            <div className="hero-login">
                <div className='hero-header'>
                    <div className='hero-text'>For Details</div>
                    <div className='hero-underline'></div>
                </div>
                <div className='hero-inputs'>
                    <div className='hero-input'>
                        <input type='text' placeholder='Name'/>
                    </div>
                    <div className='hero-input'>
                        <input type='phone' placeholder='Phone'/>
                    </div>
                    <div className='hero-submit-container'>
                        <div className='hero-submit' >Submit</div>

                    </div>
                </div>
            </div>
        </div>

        
        
    )
}

export default Hero;