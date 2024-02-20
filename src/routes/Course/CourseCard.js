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
    <Box width='300px' >
            <Card elevation={3} >
                <CardMedia 
                    component='img'
                    height={140}
                    image={CourseImage1}
                    alt='Course'
                />
                <CardContent onClick={coursedetails} className='course-card-content'>
                    <Typography gutterBottom variant="h5" component='div' color='text.primary'>
                        SSC Complete Course 

                    </Typography>
                    <Typography variant="body2" color='text.secondary'>
                        Bangla, English, Math, Sociology, ICT

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <CardContent className='course-card-footer-content'>
                        <Typography gutterBottom variant="h5" component='div' color='text.primary' fontSize={10} > 
                            Course Fee 

                        </Typography>
                        <Typography variant="body2" color='text.secondary'>
                            3000tk
                        </Typography>
                    </CardContent>
                    <Button onClick={routeChange} className='enroll-button'>Enroll</Button>

                </CardActions>
            </Card>

        </Box>
  )
}

export default CourseCard