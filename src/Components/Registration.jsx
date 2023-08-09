
function Registration () {
    return (
        <>
        <div className="h-screen justify-center ">
          <div className='flex justify-center items-center bg-red-500 w-full h-10 border border-white'>
            <h1 className='text-xl font-bold text-white'>
             NEW CUSTOMER
            </h1>
          </div>
          <div className='px-20 py-3 '>
            <h1 className='text-xl font-bold text-white'> 
             Username
            </h1>
            <input type='text'  placeholder='Complete Name' className='border border-black w-full mt-3 px-3 py-3 ' />
          </div>
          <div className='px-20 py-3 '>
            <h1 className='text-xl font-bold text-white'> 
             Email
            </h1>
            <input type='text'  placeholder='Email@gmail.com' className='border border-black w-full mt-3 px-3 py-3 ' />
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold text-white'> 
              Password
            </h1>
            <input type='password'  placeholder='Password' className='border border-black w-full mt-3 px-3 py-3 ' />
            <div className='text-red-600'>
              Password Have Minimum 6 Characters
            </div>
          </div>
          <div className='px-20 py-3 text-white' >
            <button  className="hover:bg-amber-400 font-bold border border-white w-24 font-bold">
              Register
            </button>
            <div className="pt-7 text-white">
                 View your order history in one place
                 Download tickets or edit attendee information
                 View streams you have bought tickets to
                 Automatically fill user information when checking out
            </div>
          </div>
        </div>
        </>
    )
}

export default Registration;