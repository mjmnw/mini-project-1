import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"

function MyAccount () {
    return(
        <>
        <Navbar />
        <div>
        <ul className="flex flex-col mt-7 px-5 mb-24">
            <li>
                <a  className="flex mb-2 hover:text-red-600" href="#">
                    Account Information
                </a>
            </li>
            <li>
                <a  className="flex mb-2 hover:text-red-600" href="#">
                    My Ticket
                </a>
            </li>
            <li>
                <a  className="flex mb-2 hover:text-red-600" href="#">
                    My Points
                </a>
            </li>
            <li>
                <a  className="flex mb-2 hover:text-red-600" href="#">
                    Transaction History
                </a>
            </li>
            <li>
                <a  className="flex mt-10 mb-2 hover:text-red-600" href="#">
                    About Us
                </a>
            </li>
            <li>
                <a  className="flex mb-2 hover:text-red-600" href="#">
                    Terms & Conditions
                </a>
            </li>
        </ul>
        </div>
        <Footer />
        </>
    )
}

export default MyAccount