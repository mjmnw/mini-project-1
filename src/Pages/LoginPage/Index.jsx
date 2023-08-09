import Login from "../../Components/Login";
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"

function LoginPage() {
    return (
        <>
        <div className="bg-black">
        <Navbar/>
        <div className='grid grid-cols-2 mt-24 px-32'>
            <Login/>
        </div>
        <Footer/>
        </div>
        </>
    )
}

export default LoginPage;