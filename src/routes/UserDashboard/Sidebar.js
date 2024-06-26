import React, {useState} from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPersonCircle, BsDashCircle, BsSpeedometer2}
 from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import '../CSS/UserDashboard.css';
import HomeIcon from '@mui/icons-material/Home';
import { Link,useNavigate } from "react-router-dom";
import EnrolledCourses from './EnrolledCourses';



function Sidebar({openSidebarToggle, OpenSidebar,gotoEnrolledCoursesPage,gotoDashboardPage,gotoResultPage,gotoProfilePage,gotoExamPage, gotoReportPage, gotoSettingPage}) {
    
    const { t } = useTranslation();
    // let navigate = useNavigate(); 
    // const gotoEnrolledCoursesPage = () =>{ 
    //     let path = `/signup/login/userdashboard/enrolledcourses`; 
    //     navigate(path);
    // }
    
  return (
    <aside id="userdashboard-sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        {/* <div className='sidebar-title'>
                <div className='sidebar-brand'>
                <HomeIcon className='userdashboard-icon_header'/>
                Home
                </div>
        </div> */}
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsPersonCircle  className='userdashboard-icon_header'/> Student Name
            </div>
            <span className='userdashboard-icon userdashboard-close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'  onClick={gotoProfilePage}>
                <a href="">
                    <BsPersonCircle className='userdashboard-icon'/>
                </a>
                <text className='sidebar-list-item-title'>{t("PROFILE")}</text> 
            </li>
            <li className='sidebar-list-item' onClick={gotoDashboardPage}>
                <a href="">
                    <BsSpeedometer2 className='userdashboard-icon'/> 
                </a>
                <text className='sidebar-list-item-title' >{t("DASHBOARD")}</text>
            </li>
            <li className='sidebar-list-item' onClick={gotoEnrolledCoursesPage}>
                <a href="">
                    <BsFillGrid3X3GapFill className='userdashboard-icon'/> 
                </a>
                <text className='sidebar-list-item-title' >{t("ENROLLED COURSES")}</text>
            </li>
            <li className='sidebar-list-item' onClick={gotoExamPage}>
                <a href="">
                    <BsPeopleFill className='userdashboard-icon'/> 
                </a>
                <text className='sidebar-list-item-title' >{t("EXAMS")}</text>
            </li>
            <li className='sidebar-list-item' onClick={gotoResultPage}>
                <a href="">
                    <BsListCheck className='userdashboard-icon'/>
                </a>
                <text className='sidebar-list-item-title'>{t("RESULTS")}</text>
            </li>
            <li className='sidebar-list-item' onClick={gotoReportPage}>
                <a href="">
                    <BsMenuButtonWideFill className='userdashboard-icon'/> 
                </a>
                <text className='sidebar-list-item-title'>{t("REPORTS")}</text>
            </li>
            <li className='sidebar-list-item' onClick={gotoSettingPage}>
                <a href="">
                    <BsFillGearFill className='userdashboard-icon'/>
                </a>
                <text className='sidebar-list-item-title'>{t("SETTINGS")}</text>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar