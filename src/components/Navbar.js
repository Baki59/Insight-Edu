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
// import MenuIcon from '@material-ui/icons/Menu';

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

    return(
        <nav className="NavbarItems">
            
            <h1 className="navbar-logo"><img src={logo} alt="Logo" /></h1>

            <div className="menu-icons" onClick={handleClick}>
            <i class="bi bi-list">=</i>
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
                            <Link className={item.cName} to={item.url}><i className={item.icon}></i>{t(item.title)}</Link>
                        </li>

                    );
                })}
                
                <button onClick={routeChange}>Sign Up</button>

            </ul>
            <LanguageSelector />

        </nav>
        

    );
}

export default Navbar