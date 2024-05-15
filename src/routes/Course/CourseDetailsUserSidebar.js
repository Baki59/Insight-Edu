import React from 'react'
import { useTranslation } from 'react-i18next';
import '../CSS/course-details-user-sidebar.css';
import CourseDetailsAccordion from './CorseDetailsAccordion';


function CourseDetailsUserSidebar({openFilterbarToggle,OpenSideFilterbar}) {
    const { t } = useTranslation();
  return (
    <aside id={openFilterbarToggle ? "course-filter-sidebar":""} className={openFilterbarToggle ? "course-filter-sidebar-responsive": ""}>
        {/* <div className='sidebar-title'>
                <div className='sidebar-brand'>
                <HomeIcon className='userdashboard-icon_header'/>
                Home  
                </div>
        </div> */}
        <div className='sidebar-title'>
            {/* <div className='sidebar-brand'>
                <BsPersonCircle  className='userdashboard-icon_header'/> Student Name
            </div> */}
            <span className='userdashboard-icon userdashboard-close_icon' onClick={OpenSideFilterbar}>X</span>
        </div>
        <CourseDetailsAccordion/>

        
    </aside>
  )
}

export default CourseDetailsUserSidebar