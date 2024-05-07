import React from 'react'
import '../CSS/course-enroll-popup.css'

const CourseEnrollPopUp = (props) => {
  return (props.trigger) ? (
    <div className='course-details-popup'>
        <div className='course-details-popup-inner'>
            <div className='close-btn' onClick={() => props.setTrigger(false)}>Close</div>
                {props.children}
        </div>
    </div>
  ) : "";
}

export default CourseEnrollPopUp