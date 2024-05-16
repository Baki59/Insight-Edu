import React,{useState,useRef} from 'react'
import Profile1 from '../../assets/profile1.webp'
import { InputText } from 'primereact/inputtext';
import { Input } from '@mui/icons-material';
import './profile.css';
import Photo_Upload_Image from '../../assets/photo_upload_image.jpg';
        

const Profile = ({profile}) => {
    const [image,setImage]=useState("");
    //const [file, setFile] = useState();
    const inputRef = useRef(null);
    // function handleImageChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }
    const handleImageClick = () =>{
        inputRef.current.click();
    }
    const handleImageChange = (event) =>{
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    }
  return (
    profile &&
    <div className='profile-holder'>
    <div onClick={handleImageClick} className='profile-user-photo'>
        {
            image ? (
                <img src={URL.createObjectURL(image)} alt=""
                className='profile-image-display-after'/>
            ):(
                <img src={Photo_Upload_Image} alt="" className='profile-image-display-before'/>
            )
        }
        <input 
        type='file' 
        ref={inputRef} 
        onChange={handleImageChange} 
        style={{display:'none'}}
        />
        <div className='profile-name'>Emanuel Makao</div>
    </div>
    <div className='profile-main'>
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
    </div>
  )
}

export default Profile