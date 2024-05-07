import * as React from 'react';
//import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
import CourseDetailsLockPopUpMessage from './CourseDetailsLockPopUpMessage';

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
  

const CourseAccordion = () => {
    const [expanded, setExpanded] = useState('');
    const [lockPopUpMessage, setLockPopUpMessage] = useState(false);

    const LockPopUpMessageWindow =()=>{
        setLockPopUpMessage(!lockPopUpMessage);
    }

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `./coursedetailsuser`; 
        navigate(path);
    }
    const gotoCourseDetailsPage = () =>{ 
        let path = `./#`; 
        navigate(path);
    }

    return (
        <div className='course-module-accordion-main'>
        <Accordion className='course-module-accordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            
            >
            <AutoStoriesIcon className='course-accordion-icon'/>
            <Typography>  Module: 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography> */}
            <ListItem disablePadding>
                <ListItemButton onClick={routeChange}>
                    <ListItemIcon>
                        <PlayCircleFilledIcon className='course-playcirclefield-icon'/>
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture1" />
                    <div className='course-free-video'>Free Video</div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture2" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture3" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture4" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture5" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture6" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video'>
                        Free Note
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quiz" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            </AccordionDetails>
        </Accordion>

        <Accordion className='course-module-accordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
                <AutoStoriesIcon className='course-accordion-icon'/>
            <Typography>Module: 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography> */}
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon className='course-playcirclefield-icon'/>
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture1" />
                    <div className='course-free-video-lock'><LockIcon/></div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture2" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture3" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture4" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture5" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture6" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                    <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quiz" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            </AccordionDetails>
        </Accordion>

        <Accordion className='course-module-accordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
                <AutoStoriesIcon className='course-accordion-icon'/>
            <Typography>Module: 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography> */}
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon className='course-playcirclefield-icon'/>
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture1" />
                    <div className='course-free-video-lock'><LockIcon/></div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture2" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture3" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture4" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture5" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture6" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                    <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quiz" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            </AccordionDetails>
        </Accordion>

        <Accordion className='course-module-accordion' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
                <AutoStoriesIcon className='course-accordion-icon'/>
            <Typography>Module: 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography> */}
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon className='course-playcirclefield-icon'/>
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture1" />
                    <div className='course-free-video-lock'><LockIcon/></div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture2" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture3" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture4" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture5" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture6" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                    <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quiz" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            </AccordionDetails>
        </Accordion>

        <Accordion className='course-module-accordion' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
                <AutoStoriesIcon className='course-accordion-icon'/>
            <Typography>Module: 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography> */}
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon className='course-playcirclefield-icon'/>
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture1" />
                    <div className='course-free-video-lock'><LockIcon/></div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture2" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture3" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture4" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture5" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture6" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                    <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quiz" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            </AccordionDetails>
        </Accordion>

        <Accordion className='course-module-accordion' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
                <AutoStoriesIcon className='course-accordion-icon'/>
            <Typography>Module: 6</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography> */}
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon className='course-playcirclefield-icon'/>
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture1" />
                    <div className='course-free-video-lock'><LockIcon/></div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture2" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture3" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture4" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture5" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture6" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                    <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quiz" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            </AccordionDetails>
        </Accordion>
        <Accordion className='course-module-accordion' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
                <AutoStoriesIcon className='course-accordion-icon'/>
            <Typography>Module: 7</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography> */}
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon className='course-playcirclefield-icon'/>
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture1" />
                    <div className='course-free-video-lock'><LockIcon/></div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture2" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture3" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture4" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture5" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Lecture6" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                    <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Class Note/Lecture Sheet" />
                    <div className='course-free-video-lock'>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quiz" />
                    <div className='course-free-video-lock' onClick={LockPopUpMessageWindow}>
                        <LockIcon/>
                    </div>
                </ListItemButton>
            </ListItem>
            </AccordionDetails>
        </Accordion>
        <CourseDetailsLockPopUpMessage trigger={lockPopUpMessage} setTrigger={setLockPopUpMessage} className='course-details-lock-pop-up-message-container'>
                <div className="course-details-lock-pop-up-message">
                Please enroll this course to get access of this video/material.
                </div>
                <div className='course-lock-pop-up-enroll-button' onClick={gotoCourseDetailsPage}>
                    Enroll
                </div>
        </CourseDetailsLockPopUpMessage>
        </div>
    );

}

export default CourseAccordion