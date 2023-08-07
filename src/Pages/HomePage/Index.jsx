import { Link } from "react-router-dom"

function Home () {
    return(
        <>
            <h1>
                Testttt
            </h1>
            <Link to='/profile'>
                <span>
                    Go to profile page
                </span>
            </Link>
        </>
    )
}

export default Home