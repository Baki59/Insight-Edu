import './App.css';
//import LanguageSelector from './components/LanguageSelector';
//import Content from './components/Content';
//import Sidebar from './components/Sidebar';
//import Navbar from './components/Navbar';
//import image1 from "./assets/image1.png"
//import rectangle from "./assets/Rectangle2.png"
//import banner from "./assets/Banner.jpg"
//import Hero from './components/Hero';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './routes/Home/Home';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Course from './routes/Course/Course';
import FreeCourse from './routes/Freecourse';
import Scholarship from './routes/Scholarship';
import UserDashboard from './routes/UserDashboard/UserDashboard';
import SignUp from './routes/Signup';
import Login from './routes/Login';
import Enroll from './routes/Enroll';
import CourseDetails from './routes/Course/CourseDetails';
import CourseDetailsUser from './routes/Course/CourseDetailsUser';
import {useEffect} from 'react'
import EnrolledCourses from './routes/UserDashboard/EnrolledCourses';

function App() {
  const pathname=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/freecourse' element={<FreeCourse/>}/>
        <Route path='/scholarship' element={<Scholarship/>}/>
        <Route path='/userdashboard' element={<UserDashboard/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signup/login' element={<Login/>}/>
        <Route path='/signup/login/userdashboard' element={<UserDashboard/>}/>
        <Route path='/signup/login/userdashboard/enrolledcourses' element={<EnrolledCourses/>}/>
        <Route path='/course/enroll' element={<Enroll/>}/>
        <Route path='/course/coursedetails' element={<CourseDetails/>}/>
        <Route path='/course/coursedetails/coursedetailsuser' element={<CourseDetailsUser/>}/>
      </Routes>     
    </div>
  );
}

export default App;