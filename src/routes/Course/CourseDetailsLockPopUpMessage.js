import React from 'react'
import '../CSS/course-detail-lock-pop-up-message.css'

const CourseDetailsLockPopUpMessage = (props) => {
  return (props.trigger) ? (
    <div className='course-details-lock-popup'>
        <div className='course-details-lock-popup-inner'>
            <div className='course-details-lock-close-btn' onClick={() => props.setTrigger(false)}>Close</div>
                {props.children}
        </div>
    </div>
  ) : "";
}

export default CourseDetailsLockPopUpMessage