import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Productcard from "../../Components/Productcard"

function Home () {
    return(
        <>
           <main>
                <h1>
                <Navbar></Navbar>
            </h1>
          
            <Link to='/profile'>

            </Link>
            <h1>
                <Footer></Footer>
            </h1>
           </main>
        </>
    )
}

export default Home