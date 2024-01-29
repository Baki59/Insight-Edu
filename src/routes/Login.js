import React from 'react'
import './CSS/Signup.css'
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
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
    <div className='container'>
        <div className='header'>
            <div className='text'>LogIn</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <HiOutlineMail className='img'/>
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className='input'>
                <RiLockPasswordLine className='img'/>
                <input type='password' placeholder='Password'/>
            </div>
            <div className='forgot-password'>Forgot Password? <span>Click Here</span></div>
            <div className='submit-container'>
                <div className='submit' onClick={routeChange}>LogIn</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login