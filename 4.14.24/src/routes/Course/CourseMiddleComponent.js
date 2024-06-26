//import { Col, Container, Row } from "react-bootstrap";
import "../CSS/course-middle-component.css"
import Middle_left_Image from '../../assets/middle_left_box.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
//import { Card, Typography } from "@mui/material";
import {useState} from "react";
import CourseEnrollPopUp from "./CourseEnrollPopUp";
function CourseMiddleComponent(){
    const [popUpWindow, setPopUpWindow] = useState(false);

    const PromoapplyWindow =()=>{
        setPopUpWindow(!popUpWindow);
    }

    return(
        <div className="course-container_middle_comp">
            <div className="course-box-left">
                <img 
                src={Middle_left_Image}
                className="course-middle-left-image"
                alt="middle-left"
                />
            </div>
            <div className="course-box-right">
                <div className="course-box-right-content">
                    
                    {/* <div className="course-box-right-sub-duration">
                        Duration- 3 Months
                    </div>
                    <div className="course-box-right-sub-duration1">
                        (March'24-May'24)
                    </div> */}
                    <div className="course-box-right-course-feature">
                        {/* <div className="course-box-right-course-feature-text">
                            Course Feature
                        </div> */}
                        <div className="course-box-right-course-feature-left-list">
                            <div className="course-box-right-course-feature-left-list-title">Course Feature</div>
                                <li>100 Video Class</li>
                                <li>Online Exam</li>
                                <li>Quiz</li>
                                <li>Free Lecture Sheet</li>
                                <li>Suggestion</li>
                                <li>Discussion</li>
                                <li>Mentor Support</li>
                        </div>
                        <div className="course-middle-circle">
                            <div className="course-middle-circle1">
                                <div className="course-middle-circle2">
                                    <div className="course-circle-text">
                                    Course Fee
                                    </div>
                                    <div className="course-circle-text1">
                                    5000
                                    <FontAwesomeIcon icon={faBangladeshiTakaSign} />
                                    </div>
                                    
                                    <div className="course-circle-text2">
                                    3000
                                    <FontAwesomeIcon icon={faBangladeshiTakaSign} />
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            <div className="course-middle-circle-admit-now" onClick={PromoapplyWindow}>
                                Enroll Now
                            </div>
                            

                        </div>
                    </div>
                   <div className="course-box-right-sub-duration">
                        Duration- 3 Months
                    </div>
                    <div className="course-box-right-sub-duration1">
                        (March'24-May'24)
                    </div>
                </div>
            </div>
            <CourseEnrollPopUp trigger={popUpWindow} setTrigger={setPopUpWindow} className='course-middle-component-pop-up'>
                {/* <div>Have any Poromo Code?</div> */}
                <input className="course-enroll-popup-input"
                placeholder="Name"
                ></input>
                <input className="course-enroll-popup-input"
                placeholder="Email"
                ></input>
                <input className="course-enroll-popup-input"
                placeholder="Phone"></input>
                {/* <button>
                    Submit
                </button> */}
                {/* <div>
                    <div>Previous Amount: 5000</div>
                    <div>Payable Amount: 4000</div>
                </div> */}
                <button >SignUp & Pay Now</button>
            </CourseEnrollPopUp>
            
        </div>
    )
}

export default CourseMiddleComponent;