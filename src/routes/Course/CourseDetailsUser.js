import React, {useRef,useState} from 'react'
import Navbar from '../../components/Navbar'
import CourseDetailsAccordion from './CorseDetailsAccordion'
import '../CSS/course-details-user.css'
import { useTranslation } from 'react-i18next'
import { ProgressBar } from 'react-bootstrap'
//import ReactPlayer from "react-player";
//import { useRef } from "react";
import Lecture1 from '../../assets/Videos/Proof by induction.mp4'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PersonIcon from '@mui/icons-material/Person';

const CourseDetailsUser = () => {
  const { t } = useTranslation();
  const videoPlayerRef = useRef(null);
  const [showCourseContent, setCourseContent] = useState(true);
  const [showDiscussion, setDiscussion] = useState(false);
  const [showComment, setComment] = useState(false);
  const [showExams, setShowExams] = useState(false);
  // const handlePlay = () =>{
  //   videoPlayerRef.current.play();
  // }
  var well={
    boxShadow: '1px 2px 9px #F4AAB9'
  }
  const CourseContent = () =>{
    setCourseContent(!showCourseContent);
    setDiscussion(false);
    setComment(false);
    setShowExams(false);
  }
  const Exams = () =>{
    setCourseContent(false);
    setDiscussion(false);
    setComment(false);
    setShowExams(!showExams);
  }
  const Discussion = () =>{
    setCourseContent(false);
    setDiscussion(!showDiscussion);
    setComment(false);
    setShowExams(false);
  }
  const Comment = () =>{
    setCourseContent(false);
    setDiscussion(false);
    setComment(!showComment);
    setShowExams(false);
  }
  return (
    <div>
        <Navbar/>

        {/* <div className="course-details-course-container course-details-centered">
        <firstRowElement1 className="course-details-first-row-element-1 text-xl course-details-centered">
            {t("Courses")}
        </firstRowElement1>
        <input 
        className="course-details-first-row-element-2 text-xl course-details-centered"
        placeholder={t("Search")}
        />
        <firstRowElement3 className="course-details-first-row-element-3 text-xl course-details-centered">
            {t("Subscription")}
        </firstRowElement3>
        
        <firstRowElement4 className="course-details-first-row-element-4 text-xl course-details-centered">
            {t("Join Free Class")}
        </firstRowElement4>
        </div> */}
        <div className='course-course-deatils-accordion'>
          <div className='course-course-deatils-accordion-left'>
            <CourseDetailsAccordion/>
          </div>
          <div className='course-course-deatils-accordion-right'>
            <div className='course-course-deatils-accordion-right-top'>
              <div className='course-course-deatils-accordion-right-top-text'>
                HSC-24 Crash Course
              </div>
              <div className='course-course-deatils-accordion-right-progress'>
                <div1>Progress</div1>
                <div2>
                  <progress value={0.5}/>
                </div2>
                <div3>
                  <div31>80%</div31>
                </div3>
              </div>
            </div>
            <div className='course-details-video-controls'>
              <div1>Prev</div1>
              <div2><ArrowBackIosIcon/></div2>
              <div3><ArrowForwardIosIcon/></div3>
              <div4>Next</div4>
            </div>
            <video src={Lecture1} title='Lecture 1' controls autoplay="true"  className='lecture1-video' muted ref={videoPlayerRef}/> 
            <div className="course-details-user-container">
              <div className="course-details-user-second-row-element-1 text-xl"
              onClick={CourseContent}
              >
                  {t("Course Content")}
              </div>
              <div 
              className="course-details-user-second-row-element-2 text-xl"
              onClick={Exams}
              >
                  {t("Exam")}

              </div>
              
              <div className="course-details-user-second-row-element-3 text-xl "
              onClick={Discussion}
              >
                  {t("Discussion")}
              </div>
              
              <div className="course-details-user-second-row-element-4 text-xl "
              onClick={Comment}
              >
                  {t("Comment")}
              </div>
            </div>
            { showExams && <>
            <div className='course-details-user-exam'>Exam</div> 
            <div className='course-details-user-exam-box' style={well}>
              <div1>
                <TaskAltIcon className='course-details-user-exam-box-TaskAltIcon'/>
                Quiz
              </div1>  
              <div2>
              <TaskAltIcon className='course-details-user-exam-box-TaskAltIcon'/>
                Class Test
              </div2>  
              <div3>
              <TaskAltIcon className='course-details-user-exam-box-TaskAltIcon'/>
                Model Test
              </div3>  
              <div4>
              <TaskAltIcon className='course-details-user-exam-box-TaskAltIcon'/>
                Practical
              </div4>  
            </div>  
            <div className='course-details-user-quiz' style={well}>
              <div1>
              <TaskAltIcon className='course-details-user-exam-box-TaskAltIcon'/>
                Quiz-01
              </div1>
              <div2>
                <div3>
                  Total Questions: 10
                </div3>
                <div4>
                  |
                </div4>
                <div5>
                  Time: 20 mins
                </div5>
                <div6>
                  Start
                </div6>
              </div2>
              
            </div> 

            <div className='course-details-user-quiz-prev' style={well}>
              <div1>
              <TaskAltIcon className='course-details-user-exam-box-TaskAltIcon'/>
                Previous Exam
              </div1>
              <div2>
                <div3>
                  <div31>Date: 06.03.24</div31>
                  <div31>Total Questions: 100</div31>
                  <div31>Answered: 90</div31>
                  <div31>Unanswered: 10</div31>
                  <div31>Wrong: 10</div31>
                  <div31>Correct: 80</div31>
                  <div31>Time: 45 mins</div31>
                </div3>

                <div5>
                  <div51>80/100</div51>
                  <div52>
                    <div521>
                      <text1>Marks Obtained</text1>
                      <text2>80%</text2>
                    </div521>
                  </div52>
                </div5>

                <div6>
                  <div61>Question Solve</div61>
                  <div62>Retake</div62>
                  <div63>Download</div63>
                </div6>
              </div2>
              
            </div>

            </>  

          }

          {
            showDiscussion && 
            <div className='course-details-user-comment' style={well}>
            <div1>Discussion</div1>
            <div2>
              <div21>
                <PersonIcon/>
              </div21>
              <div22>
                <div221>Sakib Hasan 'Date' 'Time'</div221>
                <div222>Thanks for this beautiful course.</div222>
              </div22>
            </div2>
            <hr
              style={{
                color: '#000000',
                height: 2,
                backgroundColor: '#000000',
                borderColor : '#000000',
                marginLeft:'30px',
                marginRight:'30px'
            }}
            />
            <div2>
              <div21>
                <PersonIcon/>
              </div21>
              <div22>
                <div221>Sakib Hasan 'Date' 'Time'</div221>
                <div222>Thanks for this beautiful course.</div222>
              </div22>
            </div2>
            <hr
              style={{
                color: '#000000',
                height: 2,
                backgroundColor: '#000000',
                borderColor : '#000000',
                marginLeft:'30px',
                marginRight:'30px'
            }}
            />
            <div2>
              <div21>
                <PersonIcon/>
              </div21>
              <div22>
                <div221>
                  <input placeholder='Comment'/>
                </div221>
              </div22>
            </div2>
            <hr
              style={{
                color: '#000000',
                height: 2,
                backgroundColor: '#000000',
                borderColor : '#000000',
                marginLeft:'30px',
                marginRight:'30px'
            }}
            />
            
          </div>
          }

          { showComment && 
            <div className='course-details-user-comment' style={well}>
              <div1>Comments</div1>
              <div2>
                <div21>
                  <PersonIcon/>
                </div21>
                <div22>
                  <div221>Sakib Hasan 'Date' 'Time'</div221>
                  <div222>Thanks for this beautiful course.</div222>
                </div22>
              </div2>
              <hr
                style={{
                  color: '#000000',
                  height: 2,
                  backgroundColor: '#000000',
                  borderColor : '#000000',
                  marginLeft:'30px',
                  marginRight:'30px'
              }}
              />
              <div2>
                <div21>
                  <PersonIcon/>
                </div21>
                <div22>
                  <div221>Sakib Hasan 'Date' 'Time'</div221>
                  <div222>Thanks for this beautiful course.</div222>
                </div22>
              </div2>
              <hr
                style={{
                  color: '#000000',
                  height: 2,
                  backgroundColor: '#000000',
                  borderColor : '#000000',
                  marginLeft:'30px',
                  marginRight:'30px'
              }}
              />
              <div2>
                <div21>
                  <PersonIcon/>
                </div21>
                <div22>
                  <div221>
                    <input placeholder='Comment'/>
                  </div221>
                </div22>
              </div2>
              <hr
                style={{
                  color: '#000000',
                  height: 2,
                  backgroundColor: '#000000',
                  borderColor : '#000000',
                  marginLeft:'30px',
                  marginRight:'30px'
              }}
              />
              
            </div>
          }

          </div>

          

        </div>
    </div>
  )
}

export default CourseDetailsUser