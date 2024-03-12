import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import CourseImage1 from '../../assets/course_image.png'
// import { blue } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import '../CSS/courseCard.css'

const CourseCard = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `./enroll`; 
        navigate(path);
    }
    const coursedetails = () =>{
        let path1 = `./coursedetails`;
        navigate(path1);
    }
  return (
    <Box width='300px' className='course-card-box'>
            <Card elevation={3} >
                <CardMedia 
                    component='img'
                    height={140}
                    image={CourseImage1}
                    alt='Course'
                />
                <CardContent onClick={coursedetails} className='course-card-content'>
                    <Typography gutterBottom variant="h5" component='div' color='#1556FC'>
                        SSC Complete Course 

                    </Typography>
                    <Typography variant="body2" color='black'>
                        Bangla, English, Math, Sociology, ICT

                    </Typography>
                </CardContent>
                <CardActions className='course-card-content'>
                    <divreview className='course-card-review'>
                    <div1> 
                        <div11>60 Class</div11>
                        <div12>|</div12>
                        <div13>4 Months</div13>
                    </div1>
                    <div2>
                        4.6*****(245)
                    </div2>
                    </divreview>
                    {/* <Button size='small'>Share</Button> */}
                    <div className='course-card-footer-content'>
                        <div1> 
                            Course Fee 
                        </div1>
                        <div4>
                            <div2>
                                5000tk
                            </div2>
                            <div3>
                                3000tk
                            </div3>
                        </div4>
                    </div>
                    <div onClick={routeChange} className='enroll-button'>Enroll</div>

                </CardActions>
            </Card>

        </Box>
  )
}

export default CourseCard