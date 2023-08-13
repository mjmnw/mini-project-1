import { useDispatch } from "react-redux"
import { logout } from "../Redux/Reducer/Auth"
import { useNavigate } from "react-router-dom"

const LogoutButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logouts = () => {
        try {
                dispatch(logout())
                localStorage.removeItem("user")
                navigate("/login")
        } catch (error) {
            console.log("Logout Error")
        }
    }
    
    return(
        <button onClick={logouts}>
        Logout
        </button>
    )
}

export default LogoutButton