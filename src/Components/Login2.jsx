import { useFormik } from "formik"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../Redux/Reducer/Auth"
import axios from "axios"
import * as yup from "yup"
import Navbar from "./Navbar"
import Footer from "./Footer"


const Login2 = () => {
    const dispatch = useDispatch()
    const [passwordShown, setPasswordShown] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object().shape({
            email: yup.string().email().required("Email is Required."),
            password: yup.string().required("Password is Required."),
        }),
        onSubmit: async(values) => {
            try {
                const res = await axios.get("http://localhost:5000/user", {
                    params: {
                        email: values.email,
                        password: values.password,
                    },
                })
                localStorage.setItem("user", JSON.stringify(res.data[0]))
                dispatch(login(res.data[0]))
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        }
    })

    return(
        <div>
        <Navbar />
        <form style={{}} onSubmit={formik.handleSubmit}>
          <span>Login to Your Account</span>
          <p style={{}}>Email</p>
          <input
            type="text"
            style={{}}
            name="email"
            onChange={formik.handleChange}
          />
          <p style={{ margin: 0, color: "red" }}>{formik.errors.email}</p>
  
          <p style={{}}>Password</p>
          <input
            type= { passwordShown ? "text" : "password"}
            style={{}}
            name="password"
            onChange={formik.handleChange}
          />
        <a style={{ fontSize: 12, alignSelf: "flex-end" }} onClick={() => setPasswordShown(!passwordShown)}>
            Show Password
          </a>
          <p style={{ margin: 0, color: "red" }}>{formik.errors.password}</p>
  
          <button style={{}} type="submit">
              Login
          </button>
        </form>
        <Footer />
      </div>
    )
}

export default Login2