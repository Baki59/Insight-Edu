//import ReactSearchBox from "react-search-box";
import Navbar from "../../components/Navbar";
import '../CSS/course.css';
import Course_image1 from '../../assets/LearnRectangle51.png'
//import { Col, Container, Row } from "react-bootstrap";
import CoverImageText from "./CoverImageText";
import { useTranslation } from 'react-i18next';
//import { Box, Card, CardContent, Typography } from "@mui/material";
import CourseCard from "./CourseCard";
import styled from "styled-components";
import { AccordionDetails, AccordionSummary, Container, Grid, Typography } from "@mui/material";
import Footer from "../../components/MyFooter";
import CourseLeftBar from "./CourseLeftBar";
import CourseDropdown1 from "./CourseDropdown1";
import { Accordion } from "flowbite-react";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LeftSidebarFilter from "./SidebarFilter";
import { BsJustify } from "react-icons/bs";
import FilterListIcon from '@mui/icons-material/FilterList';
import React,{useState} from 'react'



function Course(){
    const { t } = useTranslation();
    // const Grid = styled.div`
    //     display: grid;
    // `
    const [openFilterbarToggle, setOpenFilterbarToggle] = useState(false)

    const OpenSideFilterbar = () => {
        setOpenFilterbarToggle(!openFilterbarToggle)
    }
    
    return(
        <div className="course-fullpage">
        <Navbar/> 
        {/* <div className='course-filter-menu-icon'>
            <BsJustify className='userdashboard-icon'/>
        </div> */}
        <div className="course-filter-middle-part">
            <FilterListIcon onClick={OpenSideFilterbar}/>
            <div>
                <input
                    placeholder="search"
                />
            </div>
        </div>

        {
            openFilterbarToggle ? (<LeftSidebarFilter openFilterbarToggle={openFilterbarToggle} OpenSideFilterbar={OpenSideFilterbar}/>) : ("")
        }
        
        
        
        <div className="course-course-container centered">
        {/* <firstRowElement1 className="first-row-element-1 text-xl centered">
        
                    <select className="course-option-selection">
                        <option value="fruit">SSC</option>
                        <option value="vegetable">HSC</option>
                        <option value="meat">IELTS</option>
                    </select>
        </firstRowElement1>
        <input 
        className="first-row-element-2 text-xl text-centered"
        placeholder={t("Search")}
        />
        <firstRowElement3 className="first-row-element-3 text-xl centered">
            {t("Subscription")}
        </firstRowElement3>
        
        <firstRowElement4 className="first-row-element-4 text-xl centered">
            {t("Join Free Class")}
        </firstRowElement4> */}
        </div>
        <img alt="HeroImg" src={Course_image1} className="course-cover-image cenetered"/>

        <CoverImageText/>

        {/* <CourseDropdown1 className='course-dropdown1'/> */}

        {/* <Accordion defaultExpanded className='course-module-accordion'>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            
            >
            <AutoStoriesIcon className='course-accordion-icon'/>
            <Typography>  Module: 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography> 
            <CourseLeftBar/>
            </AccordionDetails>
        </Accordion> */}

        {/*<div>Hey Git has been updated!!!!!....</div> */}

        


        
        <div className="course-middle-container">
            <CourseLeftBar className='course-course-leftbar'/>
            <Grid container
            className="course-grid">
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </Grid>
        </div>

        <Footer/>

        

        
        
        </div>
    )
}

export default Course;