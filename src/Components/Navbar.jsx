// import Logo from './Utilites/Logo2.png'

function Navbar() {
  return(
    <>
      <nav className="flex h-[80px] bg-black justify-between items-center text-white">
        <div className="flex pl-10">
          <a href="#" className=""><img src={ require('./src/Utilities/Logo2.png')}></img></a>
        </div>
        <div>
          <ul className="flex">
            <li className=""><a href="#">EVENT</a></li>
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