import { Link } from "react-router-dom";


function Login () {
    return (
        <>
        <div className="h-screen justify-center">
          <div className="items-center flex flex-col pl-[500px]">
          <div className='flex justify-center items-center bg-red-500 border w-[500px] h-10'>
            <h1 className='text-xl font-bold text-white'>
              CUSTOMER
            </h1>
          </div>
          <div className='px-40 py-3'>
            <h1 className='text-ms font-bold text-white pr-[300px]'> 
             Email
            </h1>
            <input type='text'  placeholder='Email@gmail.com' className='border border-black w-[350px] h-10 mt-3 px-3 py-3 ' />
          </div>
          <div className='px-40 py-3'>
            <h1 className='text-ms font-bold text-white pr-[280px]'> 
             Password
            </h1>
            <input type='password'  placeholder='Password' className='border border-black w-[350px] h-10 mt-3 px-3 py-3 ' />
          </div>
          <div className='px-20 py-3' >
            <button className="hover:bg-amber-400 text-white font-bold border border-white w-20 ">
              Login
            </button>
            <div className="pt-5 text-white">
              New User? 
                <Link  to = {"/register"} className=' text-ms text-white hover:bg-yellow-400 pl-2'>SignUp</Link>
            </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Login;