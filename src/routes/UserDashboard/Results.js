import * as React from 'react';
//import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card} from '@mui/material';
import './results.css'
import MuiAccordion from '@mui/material/Accordion';
//import MuiAccordionSummary from '@mui/material/AccordionSummary';
//import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useState} from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
//import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
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
  

const Results = ({results}) => {
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
      results && 
        <div>
        <Accordion defaultExpanded className='exam-course-module-accordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            
            >
            <Typography>  Exam #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Card className='exam-course-details-box1' elevation={3}>
                <Box className='exam-course-details-box1-1'>
                    Your Numbers: 50
                </Box>
                <Box className='exam-course-details-box1-1'>
                    Right Answers: 50 <br/>
                    Wrong Answers: 50 <br/>
                    Accuracy     : 50% <br/>
                </Box>
            </Card>
            </AccordionDetails>
        </Accordion>

        <Accordion className='exam-course-module-accordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
            <Typography>Exam #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Card className='exam-course-details-box2' elevation={3}>
                <Box className='exam-course-details-box1-1'>
                    Your Numbers: 50
                </Box>
                <Box className='exam-course-details-box1-1'>
                    Right Answers: 50 <br/>
                    Wrong Answers: 50 <br/>
                    Accuracy     : 50% <br/>
                </Box>
            </Card>
            </AccordionDetails>
        </Accordion>

        <Accordion className='exam-course-module-accordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
            <Typography>Exam #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Card className='exam-course-details-box2' elevation={3}>
                <Box className='exam-course-details-box1-1'>
                    Your Numbers: 50
                </Box>
                <Box className='exam-course-details-box1-1'>
                    Right Answers: 50 <br/>
                    Wrong Answers: 50 <br/>
                    Accuracy     : 50% <br/>
                </Box>
            </Card>
            </AccordionDetails>
        </Accordion>
        </div>
    );

}

export default Results