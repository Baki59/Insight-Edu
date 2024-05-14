import React,{useState} from 'react'
import Profile1 from '../../assets/profile1.webp'
import { InputText } from 'primereact/inputtext';
import { Input } from '@mui/icons-material';
import './profile.css';

        

const Profile = ({profile}) => {
    const [image,setImage]=useState("");
  return (
    profile &&
    <div className='profile-main'>
        {/* <div>
            <img
            style={{
                width:'200px',
                height:'200px',
                borderRadius:'50%',
                objectFit:'cover',
                border:'4px solid green'
            }}
            src='Profile1' alt=''/>
        <InputText type='file'
            accept='/image/*'
            onChange={(event)=>{
                const file=event.target.files[0];
                if(file && file.type.substring(0,5) === "image"){
                    setImage(file);

                }
                else{
                    setImage(null);
                }
            }}
        />
        </div> */}
        <form className='profile-info'>
            <div className='profile-info-1'>
                <label>First Name
                <input
                placeholder='First Name'
                />
                </label>
                <label>Last Name
                <input
                placeholder='Last Name'
                />
                </label>
            </div>

            <div className='profile-info-2'>
            <label>
            Institute
            <input
            placeholder='Institute Name'
            />
            </label>

            </div>
            
            <div className='profile-info-2'>
            <label>
                Batch
            <input
            placeholder='Batch'
            />
            </label>

            </div>
            
            <div className='profile-info-2'>
            <label>
                Father's Name
            <input
            placeholder="Father's Name"
            />
            </label>

            </div>

            <div className='profile-info-2'>
            <label>
                Mother's Name
            <input
            placeholder="Mother's Name"
            />
            </label>

            </div>

            <div className='profile-info-2'>
            <label>
                Address
            <input
            placeholder="Address"
            />
            </label>

            </div>
            <div className='profile-info-2'>
            <label>
                Phone
            <input
            placeholder="Phone"
            />
            </label>

            </div>

            
            <update>Update</update>
        </form>

        
        
        
    </div>
  )
}

export default Profile