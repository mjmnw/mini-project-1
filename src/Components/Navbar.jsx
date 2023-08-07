// import Logo from './Utilites/Logo2.png'
import Logo2 from './../Utilities/Logo2.png'

function Navbar() {
  return(
    <>
      <nav className="flex h-50 bg-black justify-between items-center text-white">
        <div className="flex pl-10">
          <a href="#" className=""><img src={Logo2} alt='Logo2'/></a>
        </div>
        <div>
          <ul className="flex">
            <li className="pl-9"><a href="#">EVENT</a></li>
            <li className="pl-9"><a href="#">MERCH</a></li>
            <li className="pl-9"><a href="#">ABOUT US</a></li>
          </ul>
        </div>
        <div>
          <ul className="flex">
            <li><a href="#">LOGIN</a></li>
            <li className="pl-3 pr-10"><a href="#">SEARCH</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
