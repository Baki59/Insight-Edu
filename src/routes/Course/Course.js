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
import { Container, Grid } from "@mui/material";
import Footer from "../../components/MyFooter";
import CourseLeftBar from "./CourseLeftBar";

function Course(){
    const { t } = useTranslation();
    // const Grid = styled.div`
    //     display: grid;

    
    // `
    return(
        <div className="course-fullpage">
        <Navbar/> 
        <div className="course-container centered">
        <firstRowElement1 className="first-row-element-1 text-xl centered">
            {t("Courses")}
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
        </firstRowElement4>
        </div>
        <img alt="HeroImg" src={Course_image1} className="course-cover-image cenetered"/>

        <CoverImageText/>

        {/*<div>Hey Git has been updated!!!!!....</div> */}

        <Container>
            <Grid container my={4} spacing={1}
            className="course-grid">
                <CourseLeftBar/>
            <Grid item xs sm md>
                <CourseCard/>
            </Grid>
            <Grid item xs sm md>
                <CourseCard/>
            </Grid>
            <Grid item xs sm md>
                <CourseCard/>
            </Grid>
            <Grid item xs sm md>
                <CourseCard/>
            </Grid>
            <Grid item xs sm md>
                <CourseCard/>
            </Grid>
            <Grid item xs sm md>
                <CourseCard/>
            </Grid>
        
        </Grid>
        </Container>

        <Footer/>

        

        
        
        </div>
    )
}

export default Course;