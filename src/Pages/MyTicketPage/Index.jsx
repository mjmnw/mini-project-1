import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Mypage from "../../Components/Mypage"

function MyTicket () {
    return(
        <>
        <div className="bg-black text-white h-screen">
        <Navbar />
        <div className="pb-20 border-b">
        </div>
        <Mypage />
        <h1 className="flex justify-center text-4xl pb-10">
            My Ticket
        </h1>
        <Footer />
        </div>
        </>
    )
}

export default MyTicket