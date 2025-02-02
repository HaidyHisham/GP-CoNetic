import React from 'react'
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function SignUp() {
  return (
    <>
    <div className='container'>
    <h2 className="membership-text">Become a member!</h2>

<form class="max-w-sm">
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
   
    <input type="name" id="name" class=" shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter your first name" required />
  </div>
  
  {/* <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
    <input type="email" id="email" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter your last name" required />
  </div> */}
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>

    <input type="email" id="email" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light ps-10" placeholder="Enter your email" required />
  </div>

  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>

    <input type="password" id="password" class=" ps-10 shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter your password" required />
  </div>
 
  <div class="mb-5">
    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>

    <input type="password" id="repeat-password" class="ps-10 shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  placeholder="Enter your password again" required />
  </div>
 
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" className=" mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create new account</button>
  <div className="flex flex-col items-center space-y-4">
      <p className="text-gray-500 text-sm font-semibold"> ━━━━━━━━━━━━━━  Or sign up with  ━━━━━━━━━━━━━━</p>
      <div className="flex space-x-4">
        {/* Google */}
        <button className="flex items-center justify-center w-12 h-12 border border-gray-500 rounded-full text-gray-700 hover:bg-gray-100 transition">
          <FaGoogle size={20} />
        </button>

        {/* Facebook */}
        <button className="flex items-center justify-center w-12 h-12 border border-gray-500 rounded-full text-gray-700 hover:bg-gray-100 transition">
          <FaFacebookF size={20} />
        </button>

        {/* LinkedIn */}
        <button className="flex items-center justify-center w-12 h-12 border border-gray-500 rounded-full text-gray-700 hover:bg-gray-100 transition">
          <FaLinkedinIn size={20} />
        </button>
      </div>
    </div>
</form>

    </div>
    </>
  )
}
