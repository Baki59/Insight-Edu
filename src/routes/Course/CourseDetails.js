import { Box, Card, Grid, Typography } from '@mui/material'
import React, {useState} from 'react'
import '../CSS/coursedetails.css'
import Navbar from '../../components/Navbar'
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-grid-system';
import CourseMiddleComponent from './CourseMiddleComponent';
import '../CSS/course-middle-component.css'
import Footer from '../../components/MyFooter';
import CourseAccordion from './CourseAccordion';
import CourseDetailsFaq from './CourseDetailsFaq';



const CourseDetails = () => {
    const { t } = useTranslation();
    const [showCourseDetails, setShowCourseDetails] = useState(true);
    const [showSyllabus, setShowSyllabus] = useState(false);
    const [showAssignment, setShowAssignment] = useState(false);
    const [showExam, setShowExam] = useState(false);
    const CourseDetails = () =>{
        setShowCourseDetails(!showCourseDetails);
        setShowSyllabus(false);
        setShowAssignment(false);
        setShowExam(false);
    }
    const Syllabus = () =>{
        setShowSyllabus(!showSyllabus);
        setShowAssignment(false);
        setShowExam(false);
        setShowCourseDetails(false);
    }
    const Assignment = () =>{
        setShowAssignment(!showAssignment);
        setShowExam(false);
        setShowCourseDetails(false);
        setShowSyllabus(false);
    }
    const Exam = () =>{
        setShowExam(!showExam);
        setShowCourseDetails(false);
        setShowSyllabus(false);
        setShowAssignment(false);
    }
  return (
    <div>
        <Navbar/>
        <div className="course-container centered">
        {/* <firstRowElement1 className="first-row-element-1 text-xl centered">
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
        </firstRowElement4> */}
        </div>
        <div className='course-middle-text'>
        HSC-24 Crash Course
        </div>
            
        

        <CourseMiddleComponent/>

        {/* <Container fluid>
        <Row align="center" justify="center" style={{ height: '300px' }}> 
            <Col xs={1.5} xl md lg  debug style={{ backgroundColor: '#FB6A77', color:'white', fontWeight:'bold'}}>
            Course Details
            </Col>
            <Col xs={1.5} debug style={{ backgroundColor: '#C1D5F6', color:'black', fontWeight:'bold'}}>
            Syllabus
            </Col>
            <Col xs={1.5} debug style={{ backgroundColor: '#ECE1E1', color:'black', fontWeight:'bold'}}>
            Project/Assignment
            </Col>
            <Col xs={1.5} debug style={{ backgroundColor: '#C1D5F6', color:'black', fontWeight:'bold'}}>
            Exam
            </Col>
        </Row>
        </Container> */}

        <div className="course-details-container course-centered" >
            <div className="second-row-element-1 text-xl course-centered" onClick={CourseDetails}>
                {t("Course Details")}
            </div>
            <div 
            className="second-row-element-2 text-xl course-centered"
            onClick={Syllabus}
            >
                {t("Syllabus")}

            </div>
            
            <div className="second-row-element-3 text-xl course-centered" onClick={Assignment}>
                {t("Project/Assignment")}
            </div>
            
            <div
             className="second-row-element-4 text-xl course-centered" onClick={Exam}>
                {t("Exam")}
            </div>
        </div>
        {
            showCourseDetails && <CourseDetailsFaq/>
        }
        
        {
            showSyllabus &&
            <div className='course-syllabus-part'>
                Syllabus

            <Card className='course-details-box2' elevation={3}>
                <Box className='course-details-box2-1'>
                    <li>HSC Examinee</li>
                    <li>HSC Examinee</li>
                    
                </Box>
                <Box className='course-details-box2-1'>
                    <li>HSC Examinee</li>
                    <li>HSC Examinee</li>
                </Box>
            </Card>
            </div>
        }

        {
            showAssignment &&
            <div className='course-syllabus-part'>
                Assignment

            <Card className='course-details-box2' elevation={3}>
                <Box className='course-details-box2-1'>
                    <li>HSC Examinee</li>
                    <li>HSC Examinee</li>
                    
                </Box>
                <Box className='course-details-box2-1'>
                    <li>HSC Examinee</li>
                    <li>HSC Examinee</li>
                </Box>
            </Card>
            </div>
        }

        {
            showExam &&
            <div className='course-syllabus-part'>
                Exam

            <Card className='course-details-box2' elevation={3}>
                <Box className='course-details-box2-1'>
                    <li>HSC Examinee</li>
                    <li>HSC Examinee</li>
                    
                </Box>
                <Box className='course-details-box2-1'>
                    <li>HSC Examinee</li>
                    <li>HSC Examinee</li>
                </Box>
            </Card>
            </div>
        }
        

        {/* <div className='course-details-text-1'>
            What will you learn from this course?
        </div>

        <Card className='course-details-box1' elevation={3}>
            <Box className='course-details-box1-1'>
                <li>HSC Physics</li>
                <li>HSC Physics</li>
                <li>HSC Physics</li>
                <li>HSC Physics</li>
            </Box>
            <Box className='course-details-box1-1'>
                <li>HSC Physics</li>
                <li>HSC Physics</li>
                <li>HSC Physics</li>
                <li>HSC Physics</li>
            </Box>
        </Card>

        <div className='course-details-text-2'>
            For whom is this course?
        </div>

        <Card className='course-details-box2' elevation={3}>
            <Box className='course-details-box2-1'>
                <li>HSC Examinee</li>
                <li>HSC Examinee</li>
                
            </Box>
            <Box className='course-details-box2-1'>
                <li>HSC Examinee</li>
                <li>HSC Examinee</li>
            </Box>
        </Card>

        <div className='course-details-text-3'>
            Why do you do this course?
        </div>

        <Card className='course-details-box2' elevation={3}>
            <Box className='course-details-box2-1'>
                <li>HSC Examinee</li>
                <li>HSC Examinee</li>
                
            </Box>
            <Box className='course-details-box2-1'>
                <li>HSC Examinee</li>
                <li>HSC Examinee</li>
            </Box>
        </Card> */}

        <div className='course-details-text-3'>
            Course Curriculum
        </div>

        <CourseAccordion className="course-details-accordion1"/>

        

        {/* <Box className='course-details-box-1'>

        </Box> */}
        {/* <Grid container my={4}>
            <Grid item>
                Course Details
            </Grid>
            <Grid item>
                Syllabus
            </Grid>
            <Grid item>
                Project/Assignment
            </Grid>
            <Grid item>
                Exam
            </Grid>
        </Grid> */}
        <Footer/>
    </div>
  )
}

export default CourseDetails