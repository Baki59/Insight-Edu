import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
// import { blue } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import './HomeCss/HomeCard1.css';
import SchoolIcon from '@mui/icons-material/School';
import { AcademicOptions } from './AcademicOptions';

const HomeCard1 = ({ handleMouseOver, handleMouseOut }) => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `./enroll`; 
        navigate(path);
    }
  return (
    <Box width='300px'>
            <Card onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <CardContent className='homecard1-academic'>
                <SchoolIcon/>
                    <Typography gutterBottom variant="h5" component='div' color='text.primary' >
                        Academic
                    </Typography>
                </CardContent>
                
            </Card>

        </Box>
  )
}

export default HomeCard1