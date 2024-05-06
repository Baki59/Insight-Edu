import React from 'react'
import './hero-submit-pop-up-message.css'

const HeroSubmitPopUpMessage = (props) => {
  return (props.trigger) ? (
    <div className='hero-popup'>
        <div className='hero-popup-inner'>
            <button className='hero-close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
        </div>
    </div>
  ) : "";
}

export default HeroSubmitPopUpMessage