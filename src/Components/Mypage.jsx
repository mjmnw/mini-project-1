export default function Mypage () {
    return(
        <>
        <div className="flex justify-between">
        <ul className="flex flex-row mt-1 px-11 mb-24">
            <li>
                <a className="flex mb-2 hover:text-red-600 pt-10 " href="#">
                    Account Information
                </a>
            </li>
            <li>
                <a  className="flex mb-2 hover:text-red-600 pt-10 pl-7" href="#">
                    My Ticket
                </a>
            </li>
            <li>
                <a  className="flex mb-2 hover:text-red-600 pl-7 pt-10" href="#">
                    My Points
                </a>
            </li>
            <li>
                <a  className="flex mb-2 hover:text-red-600 pl-7 pt-10" href="#">
                    Transaction History
                </a>
            </li>
        </ul>
        <ul className="flex flex-row mt-1 px-11 mb-24 justify-end">
            <li>
                <a  className="flex mb-2 hover:text-red-600 pl-7 pt-10" href="#">
                    About Us
                </a>
            </li>
            <li>
                <a  className="flex mb-2 hover:text-red-600 pl-7 pt-10" href="#">
                    Terms & Conditions
                </a>
            </li>
        </ul>
        </div>
        </>
    )
}