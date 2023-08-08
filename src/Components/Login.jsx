import { Link } from "react-router-dom";


function Login () {
    return (
        <>
        
        <div className="h-screen ">
          <div className='flex justify-center items-center bg-red-500 w-full h-10'>
            <h1 className='text-xl font-bold text-white'>
              CUSTOMER
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
              Login
            </button>
            <div>
                New User? 
                <Link  to = {"/registerpage"} className='pl-2 text-xl'>SignUp</Link>
            </div>
          </div>
        </div>
      
        </>
    )
}

export default Login;