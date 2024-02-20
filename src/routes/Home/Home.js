import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import MiddleComponent from "../MiddleComponent";
import Footer from "../../components/MyFooter";
import './HomeCss/Home.css'
import { Box, Grid, Typography } from "@mui/material";
//import { Card } from "react-bootstrap";
import HomeCard1 from "./HomeCard1";
import HomeCard2 from "./HomeCard2";
import HomeCard3 from "./HomeCard3";
import HomeCard4 from "./HomeCard4";
// import { AcademicOptions } from "./AcademicOptions";
// import { Link } from "react-router-dom";
import { useState } from "react";
import AcademicHoverCard from "./AcademicHoverCard";
import IntroductionVideo from '../../assets/Videos/THE SEED.mp4'

function Home(){
    //const [dropdownAcademic, setDropdownAcademic] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };

    return(
        <div className="home-container"> 
        <Navbar className="home-navbar"/> 
        
        <Hero className="home-hero"/> 

        <MiddleComponent className="home-middlecomponent"/>

        <div className="home-courses-text">
            All Courses
            <input
            placeholder="Search"
            />
        </div>
        <Grid container my={4} spacing={2} className="home-grid">
            <Grid item xs sm md>
            <HomeCard1
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
            />
            {/* {AcademicOptions.map((item,index) => {
                    <Grid key={index}
                    onMouseEnter={()=> setDropdownAcademic(true)}
                    onMouseLeave={()=> setDropdownAcademic(false)}
                    >
                    <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.title}
                    </Link>
                        
                    </Grid>
                })} */}
                {isHovering && <AcademicHoverCard/>}
            </Grid>
            <Grid item xs sm md>
            <HomeCard2/>
            </Grid>
            <Grid item xs sm md>
            <HomeCard3/>
            </Grid>
            <Grid item xs sm md>
            <HomeCard4/>
            </Grid>
            
            
            </Grid>

            <Box width='100%' alignItems='center' className="home-free-live-video">
                <Grid container spacing={2} >
                <Grid item xs sm md >
                {/* <CardMedia
                    component="video"
                    image={IntroductionVideo}
                    title='An Introduction Video.'
                    autoPlay
                    className="home-free-live-video-video"
                    
                /> */}
                <video className='home-free-live-video-video' autoPlay loop muted>
                    <source src={IntroductionVideo} type='video/mp4'/>
                </video>
                </Grid>
                
                <Grid item xs sm md>
                    <Typography gutterBottom variant="h5" color='text.primary' className="home-free-live-video-text1">
                        Join Our Free Live Class
                    </Typography> 
                    <Typography gutterBottom variant="h6" color='text.secondary' className="home-free-live-video-text2">
                    Education is an important part of human life. Education gives meaning to our life as it enables the growth and development of our mind and intellect. An educated society is an enlightened and empowered one. Such a society can make well-informed choices in its social, political and economic welfare.
                    </Typography>
                </Grid>
                </Grid>
            </Box>



        <Footer className="home-footer"/>
        </div>
    )
}

export default Home;