// import Navbar from "../../components/Navbar";
import { useState } from 'react'
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import "../CSS/UserDashboard.css"

function UserDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div>
    {/* <Navbar/> */}
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
    </div>
  )
}

export default UserDashboard;
