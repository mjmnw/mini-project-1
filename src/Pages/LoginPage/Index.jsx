import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/Reducer/Auth";
import axios from "axios";
import * as yup from "yup";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const userSelector = useSelector((state) => state.auth)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required("Email is Required."),
      password: yup.string().required("Password is Required."),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.get("http://localhost:5000/user", {
          params: {
            email: values.email,
            password: values.password,
          },
        });
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        dispatch(login(res.data[0]));
        navigate("/");
      } catch (error) {
        console.log(error);
        navigate("/register")
      }
    },
  });

  useEffect(()=>{
    if(userSelector.id) {
      navigate('/')
    }
  },[userSelector.id])

  return (
    <div>
      <Navbar />
      <main className="flex h-screen items-center justify-center bg-black text-white">
        <div className="bg-neutral-950 p-8 rounded shadow-md w-400 ">
          <h2 className="text-2xl font-semibold mb-4 p-10">Login to Your Account</h2>
          <form
            className="flex-col gap-20 bg-neutral-900 p-8 rounded shadow-md w-150"
            onSubmit={formik.handleSubmit}
          >
            <label className="block text-sm font-medium mb-4">Email</label>
            <input
              type="text"
              className="mt-1 p-2 border w-full rounded text-black"
              name="email"
              onChange={formik.handleChange}
            />
            <p className="">{formik.errors.email}</p>

            <p className="block text-sm font-medium mt-5">Password</p>
            <input
              type={passwordShown ? "text" : "password"}
              className="mt-1 p-2 border w-full rounded text-black"
              name="password"
              onChange={formik.handleChange}
            />
            <a
              className="flex justify-end text-xs mt-2 cursor-pointer"
              onClick={() => setPasswordShown(!passwordShown)}
            >
              Show Password
            </a>
            <p className="">{formik.errors.password}</p>
            <a className="flex flex-row gap-1 text-xs justify-end mt-2">
            Don't have an account?
            <a className="flex justify-end text-xs cursor-pointer text-sky-500" href="/register">
              Sign Up
            </a>
            </a>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-5" type="submit">
              Login
            </button>
          </form>
        </div>
        </main>
        <Footer />
        </div>
  );
};

export default Login;