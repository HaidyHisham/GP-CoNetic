import '../CSS/Authentication/SignPages.scss';
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { Link} from "react-router-dom";


export default function SignUp() {
    // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" sign-up-container">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg">
        <h2 className="text-2xl font-bold text-black text-center primary_text_sign">Become a member!</h2>
        <p className="text-gray-500 text-center mt-1 font-medium secondary_text_sign">Enter your details below to create your account</p>

        {/* Google Login Button */}
        <div className="mt-6">
          <button className="flex items-center justify-center signGoogle_btn gap-3">
          <img  className='w-6 h-6' src="https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000"></img> Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center  justify-center">
        <div className={"orLight"} >
                            ━━━━━━━ or ━━━━━━━
                        </div>
          {/* <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">OR CONTINUE WITH</span>
          <div className="flex-grow border-t border-gray-300"></div> */}
        </div>

        {/* Input Fields */}
        <form className="space-y-4 ">
          {/* Full Name */}
          <div>
            <label className="label ">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="inputField_pass  "
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label ">Email</label>
            <input
              type="email"
              placeholder="m@example.com"
              className="inputField_pass"
              required
            />
          </div>

         {/* Password */}
         <div className="relative">
            <label className="label">Password</label>
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder="Enter your password"
              className="inputField_pass pr-10" // Add padding-right to avoid overlap with icon
              required
            />
            {/* Eye Icon */}
            <span
              className="absolute top-10 right-4 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </span>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter your password again"
              className="inputField_pass"
              required
            />
          </div>

          {/* Submit Button */}
          <button className="sign_btn">
            Create account
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
  );
}