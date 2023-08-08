


function LoginPage () {
    return (
        <div className=" h-screen w-[700px] mx-auto pb-[500] font-bold">
              <h1>
                Customer
            </h1>
            <div className= "flex flex-col items-center justify-center border-2 border-black h-[400px]" >
            <div className="text-red-600 border-2 border-black w-[500px] h-12">
                <h1>
                    Email
                </h1>
            </div>
            <div className="text-red-600 border-2 border-black w-[500px] h-12">
                <h1>
                    Password
                </h1>
            </div>
            <div className="text-red-600 border-2 border-black w-[500px] h-12">
                <h1>
                    Login
                </h1>
            </div>
        </div>
        </div>
       
    )
}

export default LoginPage;