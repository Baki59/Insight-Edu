import React from 'react'
import './CSS/contact.css'
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

function Contact() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        // let path = `./login`; 
        // navigate(path);
    }
  return (
    <>
    <Navbar/>
    <Typography className='contact-page-top-text'>
    <h1>For knowing details about our course and our organisation fill up the form below. </h1>
    <h2>We will contact with you.</h2>
    </Typography>
    
    <div className='contact-container'>
        <div className='contact-header'>
            <div className='contact-text'>Contact</div>
            <div className='contact-underline'></div>
        </div>
        <div className='contact-inputs'>
            <div className='contact-input'>
                <input type='text' placeholder='Name'/>
            </div>
            <div className='contact-input'>
                <input type='phone' placeholder='Phone'/>
            </div>
            <div className='contact-input'>
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className='contact-input'>
                <TextInput type='comment' placeholder='Comment'/>
            </div>
            <div className='contact-submit-container'>
                <div className='contact-submit' onClick={routeChange}>Submit</div>

            </div>
        </div>
    </div>
    <Footer className='contact-footer'/>
    </>
  )
}

export default Contact