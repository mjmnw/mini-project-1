// import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
// import Productcard from "../../Components/Productcard"
import Carousel from "../../Components/Carousel"

function Home () {
    return(
        <>
            <body className="h-screen">
                <header>
                    <nav><Navbar/></nav>
                    <Carousel/>
                </header>
                <main></main>
                <aside></aside>
                <footer>
                    <Footer/>
                </footer>
            </body>
        </>
    )
}

export default Home