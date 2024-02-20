import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
// import { blue } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import './HomeCss/HomeCard2.css'

const AcademicHoverCard1 = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `./enroll`; 
        navigate(path);
    }
  return (
    <Box width='300px'>
            <Card >
                <CardContent className='homecard2-admission'>
                    <Typography gutterBottom variant="h5" component='div' color='text.primary'>
                        SSC
                    </Typography>
                </CardContent>
            </Card>

        </Box>
  )
}

export default AcademicHoverCard1