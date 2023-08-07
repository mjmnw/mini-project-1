import Logo2 from './../Utilities/Logo2.png'

function Navbar() {
  return(
    <>
      <nav className="flex h-[80px] bg-black justify-between items-center text-white text-2xl geometr ">
        <div className="flex pl-10">
          <a href="#" className="w-[150px]"><img src={Logo2} alt='Logo2'/></a>
        </div>
        <div>
          <ul className="flex">
            <li className="hover:text-red-600"><a href="# ">EVENT</a></li>
            <li className="pl-9 hover:text-red-600"><a href="#">MERCH</a></li>
            <li className="pl-9 hover:text-red-600"><a href="#">ABOUT US</a></li>
          </ul>
        </div>
        <div>
          <ul className="flex">
            <li><a href="#">SEARCH</a></li>
            <li className="pl-3 pr-10">
              <div className='flex items-center  bg-red-600 rounded-lg w-[80px] h-[32px]'>
                <a href="#" className='pl-2 text-xl'>LOGIN</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
