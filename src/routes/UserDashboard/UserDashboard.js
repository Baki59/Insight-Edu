import Navbar from "../../components/Navbar";


import { useState } from 'react'
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import "./UserDashboard.css"

function UserDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
    <Navbar/>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
    </>
  )
}

export default UserDashboard;
