
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Button } from "flowbite-react";
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';




function App() {
  const router = createBrowserRouter([
    {path:"/",element:<SignUp/>},{
      path:"/signin",element:<SignIn/>
    }
    ])
  
  return (
    <>
    <RouterProvider router={router}> </RouterProvider>

    </>
  )
}

export default App
