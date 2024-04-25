import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
// import { blue } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import './HomeCss/HomeCard4.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const HomeCard4 = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `./enroll`; 
        navigate(path);
    }
  return (
    <Box width='300px'>
            <Card>
                
                <CardContent className='homecard4-freecourse'>
                    <CheckCircleOutlineIcon/>
                    <Typography gutterBottom variant="h5" component='div' color='text.primary'>
                        Free Course
                    </Typography>
                </CardContent>
            </Card>

        </Box>
  )
}

export default HomeCard4