import '../CSS/Authentication/SignPages.scss';
import React from "react";
import { FaGoogle } from "react-icons/fa"; // Import Google icon
import { Link} from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">Become a member!</h2>
        <p className="text-gray-500 text-center mt-1 ">Enter your details below to create your account</p>

        {/* Google Login Button */}
        <div className="mt-6">
          <button className="flex items-center justify-center w-full px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">OR CONTINUE WITH</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Input Fields */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="m@example.com"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter your password again"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button className="sign_btn">
            Create account
          </button>
          <p className="text-gray-600 text-sm text-center mt-4">
      By signing up, I agree to our{" "}
      <Link to="/privacy-policy" className="text-blue-600 hover:underline">
        Privacy Policy
      </Link>{" "}
      &{" "}
      <Link to="/terms-of-service" className="text-blue-600 hover:underline">
        Terms of Service
      </Link>.
    </p>
        </form>
      </div>
    </div>
  );
}
