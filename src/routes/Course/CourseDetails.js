import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import '../CSS/coursedetails.css'
import Navbar from '../../components/Navbar'
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-grid-system';



const CourseDetails = () => {
    const { t } = useTranslation();
  return (
    <div>
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
        <Typography
        variant="h3"
        component="div"
        fontWeight="bold"
        sx
        md
        sm

        >
                HSC-24 Crash Course
        </Typography>

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

        <div className="course-details-container">
        <secondRowElement1 className="second-row-element-1 text-xl centered">
            {t("Course Details")}
        </secondRowElement1>
        <secondRowElement2 
        className="second-row-element-2 text-xl centered"
        >
            {t("Syllabus")}

        </secondRowElement2>
        
        <secondRowElement3 className="second-row-element-3 text-xl centered">
            {t("Project/Assignment")}
        </secondRowElement3>
        
        <secondRowElement4 className="second-row-element-4 text-xl centered">
            {t("Exam")}
        </secondRowElement4>
        </div>

        <Box className='course-details-box-1'>

        </Box>
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
    </div>
  )
}

export default CourseDetails