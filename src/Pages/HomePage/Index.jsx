import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import LoginPage from "../LoginPage/Index"

function Home () {
    return(
        <>
            <h1>
                <Navbar></Navbar>
            </h1>
            <Link to='/profile'>
                <span>
                    Go to profile page
                </span>
            </Link>
            <h1>
            
                <Footer></Footer>
            </h1>
        </>
    )
}

export default Home