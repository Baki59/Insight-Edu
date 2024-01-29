//import ReactSearchBox from "react-search-box";
import Navbar from "../../components/Navbar";
import '../CSS/course.css';
import Course_image1 from '../../assets/LearnRectangle51.png'
//import { Col, Container, Row } from "react-bootstrap";
import CoverImageText from "./CoverImageText";
import { useTranslation } from 'react-i18next';
function Course(){
    const { t } = useTranslation();
    return(
        <>
        <Navbar/> 
        <div className="course-container centered">
        <div className="first-row-element-1 text-2xl text-centered">
            {t("Courses")}
        </div>
        <input 
        className="first-row-element-2 text-2xl text-centered"
        placeholder={t("Search")}
        />
        <div className="first-row-element-3 text-2xl text-centered">
            {t("Subscription")}
        </div>
        
        <div className="first-row-element-4 text-2xl text-centered">
            {t("Join Free Class")}
        </div>
        </div>
        <img alt="HeroImg" src={Course_image1} className="course-cover-image cenetered"/>

        <CoverImageText/>

        <div>Hey Git has been updated!!!!!....</div>
        
        </>
    )
}

export default Course;