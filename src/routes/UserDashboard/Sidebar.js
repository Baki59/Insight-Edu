import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPersonCircle, BsDashCircle, BsSpeedometer2}
 from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import '../CSS/UserDashboard.css'


function Sidebar({openSidebarToggle, OpenSidebar}) {
    const { t } = useTranslation();
  return (
    <aside id="userdashboard-sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsPersonCircle  className='userdashboard-icon_header'/> Student Name
            </div>
            <span className='userdashboard-icon userdashboard-close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPersonCircle className='userdashboard-icon'/>
                </a>
                <text className='sidebar-list-item-title'>{t("PROFILE")}</text> 
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsSpeedometer2 className='userdashboard-icon'/> 
                </a>
                <text className='sidebar-list-item-title'>{t("DASHBOARD")}</text>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='userdashboard-icon'/> 
                </a>
                <text className='sidebar-list-item-title'>{t("ENROLLED COURSES")}</text>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='userdashboard-icon'/> 
                </a>
                <text className='sidebar-list-item-title'>{t("EXAMS")}</text>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='userdashboard-icon'/>
                </a>
                <text className='sidebar-list-item-title'>{t("RESULTS")}</text>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='userdashboard-icon'/> 
                </a>
                <text className='sidebar-list-item-title'>{t("REPORTS")}</text>
            </li>
            <li className='sidebar-list-item'>
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