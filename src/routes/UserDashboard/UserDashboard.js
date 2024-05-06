// import Navbar from "../../components/Navbar";
import { useState } from 'react'
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import "../CSS/UserDashboard.css"
import EnrolledCourses from './EnrolledCourses';
import Results from './Results';
import Profile from './Profile';
import Exams from './Exams';
import Reports from './Reports';
import Settings from './Settings';

function UserDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [enrolledCourses,setEnrolledCourses] = useState(false);
  const [dashboard,setDashboard] = useState(true);
  const [results,setResults] = useState(false);
  const [profile,setProfile] = useState(false);
  const [exams,setExams] = useState(false);
  const [reports,setReports] = useState(false);
  const [settings,setSettings] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }
  const gotoEnrolledCoursesPage = () =>{
    setEnrolledCourses(true);
    setDashboard(false);
    setResults(false);
    setProfile(false);
    setExams(false);
    setSettings(false);
    setReports(false);
  }
  const gotoDashboardPage = () =>{
    setDashboard(true);
    setEnrolledCourses(false);
    setResults(false);
    setProfile(false);
    setExams(false);
    setSettings(false);
    setReports(false);
  }
  const gotoResultPage = () =>{
    setResults(true);
    setEnrolledCourses(false);
    setDashboard(false);
    setProfile(false);
    setExams(false);
    setSettings(false);
    setReports(false);
  }
  const gotoProfilePage = () =>{
    setProfile(true);
    setResults(false);
    setEnrolledCourses(false);
    setDashboard(false);
    setExams(false);
    setSettings(false);
    setReports(false);
  }
  const gotoExamPage = () =>{
    setExams(true);
    setProfile(false);
    setResults(false);
    setEnrolledCourses(false);
    setDashboard(false);
    setSettings(false);
    setReports(false);
  }
  const gotoReportPage = () =>{
    setReports(true);
    setExams(false);
    setProfile(false);
    setResults(false);
    setEnrolledCourses(false);
    setDashboard(false);
    setSettings(false);
  }
  const gotoSettingPage = () =>{
    setSettings(true);
    setExams(false);
    setProfile(false);
    setResults(false);
    setEnrolledCourses(false);
    setDashboard(false);
    setReports(false);
  }

  return (
    <div>
    {/* <Navbar/> */}
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} gotoEnrolledCoursesPage={gotoEnrolledCoursesPage} gotoDashboardPage={gotoDashboardPage} gotoResultPage={gotoResultPage} gotoProfilePage={gotoProfilePage} gotoExamPage={gotoExamPage} gotoReportPage={gotoReportPage} gotoSettingPage={gotoSettingPage}/>
      <Home dashboard={dashboard}/>
      
      <EnrolledCourses enrolledCourses={enrolledCourses}/>

      <Results results={results}/>
      <Profile profile={profile}/>
      <Exams exams={exams}/>
      <Reports reports={reports}/>
      <Settings settings={settings}/>

      
    </div>
    </div>
  )
}

export default UserDashboard;
