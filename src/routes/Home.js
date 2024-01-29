import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MiddleComponent from "./MiddleComponent";
import Footer from "../components/MyFooter";
import './CSS/Home.css'

function Home(){

    return(
        <div> 
        <Navbar/> 
        
        <Hero/> 

        <MiddleComponent/>

        <Footer/>
        </div>
    )
}

export default Home;