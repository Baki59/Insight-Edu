import "./NavbarStyle.css";
import { useState} from "react";
import { MenuItems } from "./MenuItems";
//import Dropdown from "./Dropdown";
//import DropdownAdmission from "./DropdownAdmission";
import { Link,useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
//import SignUp from "../routes/SignUp";
import logo from "../assets/logo.png"
import LanguageSelector from './LanguageSelector';
import { BsPersonCircle } from "react-icons/bs";
import { Menu, MenuItem } from "@mui/material";
// import MenuIcon from '@material-ui/icons/Menu';
// import Button from '@mui/material/Button';

const Navbar = () => {
    const [state, setState] = useState(false);
    //const [dropdown, setDropdown] = useState(false);
    //const [dropdownAdmission, setDropdownAdmission] = useState(false);

    const handleClick = () =>{
        setState(!state)
    }

    const { t } = useTranslation();

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `../signup`; 
        navigate(path);
    }
    const routeChangeMyAccount = () =>{ 
        let path1 = `../signup/login/userdashboard`; 
        navigate(path1);
    }

    //------------For Profile Menu-----------------
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClickProfile = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //--------------------For Profile Menu-----------------

    return(
        <nav className="NavbarItems">
            
            <h1 className="navbar-logo"><img src={logo} alt="Logo" /></h1>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>

            <div className="menu-icons" onClick={handleClick}>
            <i className={state? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            

            <ul className={state ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item,index) => {

                    {/* 
                    if(item.title === "Programs"||item.title === t(item.title)){
                        return(
                            <li key={index}
                            onMouseEnter={()=> setDropdown(true)}
                            onMouseLeave={()=> setDropdown(false)}
                            >
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>{t(item.title)}
                                </Link>
                                {dropdown && <Dropdown/>}
                            </li>
                            
                        )
                    }
                    if(item.title === "Admission"){
                        return(
                            <li key={index}
                            onMouseEnter={()=> setDropdownAdmission(true)}
                            onMouseLeave={()=> setDropdownAdmission(false)}
                            >
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{t(item.title)}
                            </Link>
                                {dropdownAdmission && <DropdownAdmission/>}
                            </li>
                            
                        )
                    }

                    */}
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>{t(item.title)}</Link>
                        </li>

                    );
                })}
                
                <button onClick={routeChange}>Sign Up</button>
                <BsPersonCircle className="navbar-profile-icon-desktop"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickProfile}
                />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>My Courses</MenuItem>
                    <MenuItem onClick={handleClose}>Exam</MenuItem>
                    <MenuItem onClick={handleClose}>Certificate</MenuItem>
                    <Link to={"/signup/login/userdashboard"}>My account</Link>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>

            </ul>
            
            
            <LanguageSelector className='language-selector'/>
            <BsPersonCircle className="navbar-profile-icon-mobile"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickProfile}
                />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>My Courses</MenuItem>
                    <MenuItem onClick={handleClose}>Exam</MenuItem>
                    <MenuItem onClick={handleClose}>Certificate</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            
            

        </nav>
        

    );
}

export default Navbar