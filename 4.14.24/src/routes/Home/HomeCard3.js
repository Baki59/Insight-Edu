import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
// import { blue } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import './HomeCss/HomeCard3.css';
import ArchitectureIcon from '@mui/icons-material/Architecture';
const HomeCard3 = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `./enroll`; 
        navigate(path);
    }
  return (
    <Box width='300px'>
            <Card>
                <CardContent className='homecard3-skill'>
                <ArchitectureIcon/>
                    <Typography gutterBottom variant="h5" component='div' color='text.primary'>
                        Skill
                    </Typography>
                </CardContent>
            </Card> 

        </Box>
  )
}

export default HomeCard3