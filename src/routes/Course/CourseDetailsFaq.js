import * as React from 'react';
//import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Inbox } from '@mui/icons-material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import '../CSS/course-module-accordion.css'
import MuiAccordion from '@mui/material/Accordion';
//import MuiAccordionSummary from '@mui/material/AccordionSummary';
//import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useState} from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
//import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import LockIcon from '@mui/icons-material/Lock';
import EventNoteIcon from '@mui/icons-material/EventNote';
import QuizIcon from '@mui/icons-material/Quiz';
import { useNavigate } from 'react-router-dom';
//import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  

const CourseDetailsFaq = () => {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `./coursedetailsuser`; 
        navigate(path);
    }

    return (
        <div>
        <Accordion defaultExpanded className='course-module-accordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            
            >
            <Typography>  What will you learn from this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>

        <Accordion className='course-module-accordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
            <Typography>For whom is this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>

        <Accordion className='course-module-accordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
            <Typography>Why do you do this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
        </div>
    );

}

export default CourseDetailsFaq