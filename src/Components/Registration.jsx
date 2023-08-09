
function Registration () {
    return (
        <>
        <div className="h-screen justify-center ">
           <div className="items-center flex flex-col pl-[500px] "> 
          <div className='flex justify-center items-center bg-red-500 w-[500px] h-10 border border-white'>
            <h1 className='text-xl font-bold text-white '>
             NEW CUSTOMER
            </h1>
          </div>
          <div className='px-20 py-3 '>
            <h1 className='text-ms font-bold text-white'> 
             Username
            </h1>
            <input type='text'  placeholder='Complete Name' className='border border-black w-[300px] h-10 mt-3 px-3 py-3 ' />
          </div>
          <div className='px-20 py-3 '>
            <h1 className='text-ms font-bold text-white'> 
             Email
            </h1>
            <input type='text'  placeholder='Email@gmail.com' className='border border-black w-[300px] h-10 mt-3 px-3 py-3 ' />
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-ms font-bold text-white'> 
              Password
            </h1>
            <input type='password'  placeholder='Password' className='border border-black w-[300px] h-10 mt-3 px-3 py-3 ' />
            <div className='pt-2 text-red-600 text-xs'>
              Password Have Minimum 6 Characters
            </div>
          </div>
          <div className='px-20 py-3 pl-[300px] text-white' >
            <button  className="hover:bg-amber-400 font-bold border border-white w-24">
              Register
            </button>
            <div className="pt-7 w-[500px] h-10 text-xs text-white">
                <li>
                 View your order history in one place
                 </li>
                 <li>
                 Download tickets or edit attendee information
                 </li>
                 <li>
                 View streams you have bought tickets to
                 </li>
                 <li>
                 Automatically fill user information when checking out
                 </li>
            </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Registration;