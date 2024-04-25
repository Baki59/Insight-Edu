import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPersonCircle, BsDashCircle, BsSpeedometer2}
 from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import '../CSS/sidebarfilter.css';
import HomeIcon from '@mui/icons-material/Home';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';


function LeftSidebarFilter({openFilterbarToggle,OpenSideFilterbar}) {
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
            <div className='sidebar-brand'>
                <BsPersonCircle  className='userdashboard-icon_header'/> Student Name
            </div>
            <span className='userdashboard-icon userdashboard-close_icon' onClick={OpenSideFilterbar}>X</span>
        </div>

        <ul className={openFilterbarToggle ? "course-filter-sidebar-list":""}>
        <FormControl sx={{ m: 3 }} className='course-sidebar-filter-form-control1'>
                    <FormLabel className="course-sidebar-filter-box1-header">Course Pricing</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Free Course"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Premium Course"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    </FormGroup>
                    {/* <FormHelperText>Be careful</FormHelperText> */}
                </FormControl>
                <FormControl sx={{ m: 3 }} className='course-sidebar-filter-form-control2'>
                    <FormLabel className="course-sidebar-filter-left-box1-header">Course Catergory</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Free Course"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Premium Course"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    </FormGroup>
                </FormControl>

            
        </ul>
    </aside>
  )
}

export default LeftSidebarFilter