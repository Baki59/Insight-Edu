import React from 'react'
import './CSS/Signup.css'
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from "../components/MyFooter";

//import user_icon from '../img/person.png'
//import email_icon from '../img/email.png'
//import password_icon from '../img/password.png'

function Login() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `./userdashboard`; 
        navigate(path);
    }
  return (
    <>
    <Navbar/>
    <div className='signup-container'>
        <div className='signup-header'>
            <div className='signup-text'>LogIn</div>
            <div className='signup-underline'></div>
        </div>
        <div className='signup-inputs'>
            <div className='signup-input'>
                <HiOutlineMail className='signup-img'/>
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className='signup-input'>
                <RiLockPasswordLine className='signup-img'/>
                <input type='password' placeholder='Password'/>
            </div>
            <div className='signup-forgot-password'>Forgot Password? <span>Click Here</span></div>
            <div className='signup-submit-container'>
                <div className='signup-submit' onClick={routeChange}>LogIn</div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login