 "use client";
 import '../CSS/Authentication/SignPages.scss';
import React, { useState } from "react";
import { FaEye, FaEyeSlash,FaSpinner } from "react-icons/fa"; // Import eye icons
import { Link, useNavigate} from "react-router-dom";
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import "@fortawesome/fontawesome-free/css/all.min.css"


export default function SignUp() {
        // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading,setIsLoading] =useState(false)
    const [errorApi,setErrorApi] =useState(null)
    let navigate = useNavigate();
    
  
    async function handleRegister(values) {
        setIsLoading(true)
      
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);
            console.log(data);
            navigate("/");
          } catch (error) {
            setErrorApi(error.response?.data?.message || "An error occurred");
          } finally {
            setIsLoading(false); 
          }
  
    }
    
  let validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(10, "Name cannot exceed 10 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^01[1250][0-9]{8}$/, "Invalid Egyptian phone number")
      .required("Phone is required"),
    password: Yup.string()
      .matches(/^[A-Za-z0-9]{6,10}$/, "Password must include letters and numbers")
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });
  
  const formikRegister = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });



  return (
    <>
    <div className=" sign-up-container">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg">
        <h2 className="text-2xl font-bold text-black text-center primary_text_sign">Become a member!</h2>
        <p className="text-gray-500 text-center mt-1 font-medium secondary_text_sign">Enter your details below to create your account</p>

        {/* Google Login Button */}
        <div className="mt-6">
          <button  className="flex items-center justify-center signGoogle_btn gap-3">
          <img  className='w-6 h-6' src="https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000"></img> Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center  justify-center">
        <div className={"orLight"} >
                            ━━━━━━━ or ━━━━━━━
                        </div>
        
        </div>

        {errorApi? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
            {errorApi}
          </div>: null}
        {/* Input Fields */}
        <form onSubmit={formikRegister.handleSubmit} className="space-y-4 ">
          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="label ">Full Name</label>
       
            <input
             name="fullname"
            id="fullname"
              type="text"
              placeholder="Enter your name"
              className="inputField_pass  "
              required
              onChange={formikRegister.handleChange}
              value={formikRegister.values.fullname}
              onBlur={formikRegister.handleBlur}
            />
          </div>
          {formikRegister.errors.fullname && formikRegister.touched.fullname && (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
            {formikRegister.errors.fullname}
          </div>
        )}

          {/* Email */}
          <div>
            <label  htmlFor="email" className="label ">Email</label>
            <input
              type="email"
               name="email"
            id="email"
              placeholder="m@example.com"
              className="inputField_pass"
              required
              onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
            value={formikRegister.values.email}
            />
          </div>
          {formikRegister.errors.email && formikRegister.touched.email && (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
            {formikRegister.errors.email}
            </div>
        )}

         {/* Password */}
         <div className="relative">
            <label htmlFor="password" className="label">Password</label>
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              name="password"
            id="password"
              placeholder="Enter your password"
              className="inputField_pass pr-10" // Add padding-right to avoid overlap with icon
              required
              onChange={formikRegister.handleChange}
            value={formikRegister.values.password}
            onBlur={formikRegister.handleBlur}
            />
            {/* Eye Icon */}
            <span
              className="absolute top-10 right-4 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </span>
          </div>
          {formikRegister.errors.password && formikRegister.touched.password && (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
            {formikRegister.errors.password}
            </div>
        )}


          {/* Confirm Password */}
          <div>
            <label htmlFor="rePassword" className="label">Confirm Password</label>
            <input
              type="password"
               name="rePassword"
            id="rePassword"
              placeholder="Enter your password again"
              className="inputField_pass"
              required
              onChange={formikRegister.handleChange}
              value={formikRegister.values.rePassword}
              onBlur={formikRegister.handleBlur}
            />
          </div>
          {formikRegister.errors.rePassword && formikRegister.touched.rePassword && (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
            {formikRegister.errors.rePassword}
            </div>
        )}

           {/* Submit Button with Spinner */}
           <button type="submit" disabled={!formikRegister.isValid || !formikRegister.dirty} className="sign_btn">
                 {isLoading ? <FaSpinner className="animate-spin" size={20} /> : "Create account"}
              </button>



          <p className="text-gray-600  text-center mt-4 font-medium helper-txt-sign">
      By signing up, I agree to our{" "}
      <Link to="/privacy-policy" className="underline ">
        Privacy Policy
      </Link>{" "}
      &{" "}
      <Link to="/terms-of-service" className="underline ">
        Terms of Service
      </Link>.
    </p>
        </form>
      </div>
    </div>
    </>
  );
  
}