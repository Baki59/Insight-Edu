import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs';
 import HomeIcon from '@mui/icons-material/Home';
 import Home from './Home';
import { useNavigate } from 'react-router-dom';


function Header({OpenSidebar}) {
  let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `../`; 
        navigate(path);
    }
  return (
    <div className='userdashboard-header'>
        <div className='userdashboard-menu-icon'>
            <BsJustify className='userdashboard-icon' onClick={OpenSidebar}/>
        </div>
        <div className='userdashboard-home-icon' onClick={routeChange}>
          <HomeIcon/>
          Insight Home
        </div>
        <div className='userdashboard-header-left'>
            <BsSearch className='userdashboard-icon'/>
            <input
            placeholder='Search'
            className='header-search'
            />
            
        </div>
        <div className='userdashboard-header-right'>
            <BsFillBellFill className='userdashboard-icon'/>
            <BsFillEnvelopeFill className='userdashboard-icon'/>
            <BsPersonCircle className='userdashboard-icon'/>
        </div>
    </div>
  )
}

export default Header