import React from 'react'
import '../CSS/course-enroll-popup.css'

const CourseEnrollPopUp = (props) => {
  return (props.trigger) ? (
    <div className='course-details-popup'>
        <div className='course-details-popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
        </div>
    </div>
  ) : "";
}

export default CourseEnrollPopUp