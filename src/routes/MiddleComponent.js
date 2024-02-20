//import { Col, Container, Row } from "react-bootstrap";
import "./CSS/MiddleComponent.css"
import Middle_left_Image from '../assets/middle_left_box.png'
//import { Card, Typography } from "@mui/material";
function MiddleComponent(){

    return(
        <div className="container_middle_comp">
            <div className="box-left">
                <img 
                src={Middle_left_Image}
                className="middle-left-image"
                alt="middle-left"
                />
            </div>
            <div className="box-right">
                <div className="box-right-content">
                    <div className="box-right-header">
                        SSC'24 Crash Course
                    </div>
                    <div className="box-right-sub">
                        Physics, Chemistry, Math, Biology
                    </div>
                    <div className="box-right-sub-duration">
                        Duration- 3 Months
                    </div>
                    <div className="box-right-sub-duration1">
                        (March'24-May'24)
                    </div>
                    <div className="box-right-course-feature">
                        Course Feature
                    </div>
                   <div className="box-right-course-feature-list">
                   <div className="box-right-course-feature-left-list">
                        <li>100 Video Class</li>
                        <li>Online Exam</li>
                        <li>Quiz</li>
                    </div>
                    <div className="box-right-course-feature-right-list">
                        <li>Free Lecture Sheet</li>
                        <li>Suggestion</li>
                        <li>Discussion</li>
                        <li>Mentor Support</li>
                    </div>
                   </div>
                    <div className="box-right-course-admit">
                        Admit Now
                    </div>
                    

                </div>
            </div>
            
        </div>
    )
}

export default MiddleComponent;