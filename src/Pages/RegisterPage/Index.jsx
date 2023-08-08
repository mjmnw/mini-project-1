
import Registration from "../../Components/Registration";
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"

function RegisterPage() {
    return (
        <>
        <Navbar/>
        <div className='grid grid-cols-2 mt-24 px-32'>
            <Registration/>
        </div>
        <Footer/>
        </>
    )
}

export default RegisterPage;