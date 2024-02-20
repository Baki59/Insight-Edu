import React from 'react'
import './CSS/enroll.css'
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import { TextInput } from 'flowbite-react';
import Footer from "../components/MyFooter";
import { Typography } from '@mui/material';
//import user_icon from '../img/person.png'
//import email_icon from '../img/email.png'
//import password_icon from '../img/password.png'

function Enroll() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        // let path = `./login`; 
        // navigate(path);
    }
  return (
    <>
    <Navbar/>
    
    <div className='enroll-container'>
        <div className='enroll-header'>
            <div className='enroll-text'>Information</div>
            <div className='enroll-underline'></div>
        </div>
        <div className='enroll-inputs'>
            <div className='enroll-input'>
                <input type='text' placeholder='Name'/>
            </div>
            <div className='enroll-input'>
                <input type='phone' placeholder='Phone'/>
            </div>
            <div className='enroll-input'>
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className='enroll-input'>
                <input type='email' placeholder='Institution'/>
            </div>
            <div className='enroll-submit-container'>
                <div className='enroll-submit' onClick={routeChange}>Enroll</div>

            </div>
        </div>
    </div>
    <Footer className='enroll-footer'/>
    </>
  )
}

export default Enroll