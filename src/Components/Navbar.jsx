import { Link } from 'react-router-dom';
import Logo2 from './../Utilities/Images/Logo2.png'
import { TbMoodSearch } from "react-icons/tb"

function Navbar() {
  return(
    <>
      <nav className="flex h-[80px] bg-black  justify-between items-center text-white text-xl montserratbold ">
        
        <div className="flex pl-10 w-[400px]">
          <a href="#" className="w-[150px]"><img src={Logo2} alt='Logo2'/></a>
        </div>

        <div>
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <TbMoodSearch className='text-neutral-700'/>
            </span>
            <input className="placeholder:italic placeholder:text-neutral-700 block bg-neutral-900 w-[500px] rounded-md  py-2 pl-11 pr-3 shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm" placeholder="Search event . . ." type="text" name="search"/>
          </label>
        </div>
        
        <div className='pr-10 flex text-base w-[400px]'>
          <div className='pr-5 flex text-base'>
            <span className="hover:text-red-600"><a href="#" className='align-middle'>EVENT</a></span>
            <span className="pl-2 hover:text-red-600"><a href="#" className='align-middle'>MERCH</a></span>
            <span className="pl-2 hover:text-red-600"><a href="#" className='align-middle'>ABOUT US</a></span>
          </div>
          <div className='flex rounded-lg w-[80px] h-[30px]  bg-neutral-900 hover:bg-neutral-800 text-white '>
            <a href='#' className='flex justify-center items-center w-full h-full hover:text-red-600'>Log In</a>
          </div>
        </div>
        
          
          
        
      </nav>
    </>
  )
}

export default Navbar;
