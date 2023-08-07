import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar"

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
        </>
    )
}

export default Home