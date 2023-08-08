
function Registration () {
    return (
        <>
        <div className="h-screen">
          <div className='flex justify-center items-center bg-red-500 w-full h-10'>
            <h1 className='text-xl font-bold text-white'>
             NEW CUSTOMER
            </h1>
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
             Email
            </h1>
            <input type='text'  placeholder='Email' className='border border-black w-full mt-3 px-3 py-3 ' />
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
              Password
            </h1>
            <input type='password'  placeholder='Password' className='border border-black w-full mt-3 px-3 py-3 ' />
          </div>
          <div className='px-20 py-3 ' >
            <button>
              Register
            </button>
            <div>
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