import React from 'react';
import './settings.css'

const Settings = ({settings}) => {
  return (
    settings &&
    <div className='user-profile-settings-holder'>
      <form className='user-profile-settings-holder-form'>
            <div className='user-profile-settings-holder-input'>
            <label>
            Old Password
            <input
            placeholder='Old Password'
            />
            </label>
            </div>
            
            <div className='user-profile-settings-holder-input'>
            <label>
                New Password
            <input
            placeholder='New Password'
            />
            </label>
            </div>
            
            <div className='user-profile-settings-holder-input'>
            <label>
                Confirm New Password
            <input
            placeholder="Confirm New Password"
            />
            </label>
            </div>
            <button>Update</button>
        </form>
    </div>
  )
}

export default Settings