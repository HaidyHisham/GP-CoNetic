import React from "react";
import "../CSS/Authentication/SignPages.scss";
import { FaFacebook, FaFacebookF, FaGoogle, FaLinkedin, FaLinkedinIn } from "react-icons/fa"; // Import Google icon
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <>
      <div className="sign_in_container ">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-center mt-1 ">
            Sign In To Your Account
          </p>
          {/* Input Fields */}
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="m@example.com"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button className="sign_btn">Login</button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">OR CONTINUE WITH</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          {/* Google Login Button */}
          <div className="mt-6 flex items-center justify-evenly">
            <button className="flex items-center justify-center  p-4 border rounded-full text-gray-700 hover:bg-gray-100 transition">
              <FaGoogle className="" />
            </button>
            <button className="flex items-center justify-center  p-4 border rounded-full text-gray-700 hover:bg-gray-100 transition">
              <FaFacebookF className="" />
            </button>
            <button className="flex items-center justify-center  p-4 border rounded-full text-gray-700 hover:bg-gray-100 transition">
              <FaLinkedinIn className="" />
            </button>
          </div>
          <p className="text-gray-600  text-center mt-4 font-medium helper-txt-sign">
            <Link to="/privacy-policy" className="underline ">
              Terms of Use
            </Link>{" "}
            |{" "}
            <Link to="/terms-of-service" className="underline ">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
