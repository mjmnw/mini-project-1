import { useFormik } from "formik";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [refferalIsValid, setRefferalIsValid] = useState(null);

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone_number: "",
      password: "",
      refferal_code: "",
    },
    validationSchema: yup.object().shape({
      full_name: yup
        .string()
        .max(20, "Max Character is 20")
        .required("Full Name is Required."),
      email: yup
        .string()
        .email("Please use a correct email")
        .required("Email is Required."),
      phone_number: yup.string().required("Phone number is Required."),
      password: yup.string().required("Password is Required."),
      refferal_code: yup.string(),
    }),
    validateOnChange: true,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:5000/user", {
          ...values,
          user_uniqueid: nanoid(5),
          refferal_code: nanoid(10),
          points: refferalIsValid ? 1 : 0,
          balance: 0,
          user_type: "user",
        });

        if(refferalIsValid) {
        await axios.patch(`http://localhost:5000/user/${refferalIsValid.id}`, {
          points: refferalIsValid.points + 1
        })
      }
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const refferalChecker = async () => {
    try {
      const res = await axios.get("http://localhost:5000/user", {
        params: {
          refferal_code: formik.values.refferal_code,
        },
      });

      if (res.data.length > 0) {
        setRefferalIsValid(res.data[0]);
      } else {
        setRefferalIsValid(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="flex h-screen items-center justify-center bg-black text-white">
        <div className="bg-neutral-950 p-8 rounded shadow-md w-400">
          <span className="flex text-2xl font-semibold pb-10 ">
            Register your Account
          </span>
          <form
            className="flex-col gap-20 bg-neutral-900 p-8 rounded shadow-md w-150"
            onSubmit={formik.handleSubmit}
          >
            <p className="block text-sm font-medium ">Full Name</p>
            <input
              type="text"
              className="mt-1 p-2 border w-full rounded text-black"
              name="full_name"
              onChange={formik.handleChange}
            />
            <p style={{ margin: 0, color: "red" }}>{formik.errors.full_name}</p>

            <p className="block text-sm font-medium mt-5">Email</p>
            <input
              type="text"
              className="mt-1 p-2 border w-full rounded text-black"
              name="email"
              onChange={formik.handleChange}
            />
            <p style={{ margin: 0, color: "red" }}>{formik.errors.email}</p>

            <p className="block text-sm font-medium mt-5">Phone Number</p>
            <input
              type="text"
              className="mt-1 p-2 border w-full rounded text-black"
              name="phone_number"
              onChange={formik.handleChange}
            />
            <p style={{ margin: 0, color: "red" }}>
              {formik.errors.phone_number}
            </p>

            <p className="block text-sm font-medium mt-5">Password</p>
            <input
              type="password"
              className="mt-1 p-2 border w-full rounded text-black"
              name="password"
              onChange={formik.handleChange}
            />
            <p style={{ margin: 0, color: "red" }}>{formik.errors.password}</p>

            <p className="block text-sm font-medium mt-5">Refferal Code</p>
            <input
              type="text"
              className="mt-1 p-2 border w-full rounded text-black"
              name="refferal_code"
              onChange={formik.handleChange}
            />
            {refferalIsValid ? <p className="text-green-300">Code is Valid</p> : <p className="text-red-300">Code is Invalid</p>}

            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-5" type="submit">
              Sign Up
            </button>
          </form>
          <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-5"
              onClick={refferalChecker}
            >
              Check Refferal Code
            </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
