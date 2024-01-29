import './App.css';
//import LanguageSelector from './components/LanguageSelector';
//import Content from './components/Content';
//import Sidebar from './components/Sidebar';
//import Navbar from './components/Navbar';
//import image1 from "./assets/image1.png"
//import rectangle from "./assets/Rectangle2.png"
//import banner from "./assets/Banner.jpg"
//import Hero from './components/Hero';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Course from './routes/Course/Course';
import FreeCourse from './routes/Freecourse';
import Scholarship from './routes/Scholarship';
import UserDashboard from './routes/UserDashboard/UserDashboard';
import SignUp from './routes/SIgnup';
import Login from './routes/Login';

function App() {
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
      </Routes>     
    </div>
  );
}

export default App;