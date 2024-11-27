import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Contact from './components/Contact';
import { createBrowserRouter ,Router,RouterProvider} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Navbar/><Home/></>
    },
    {
      path : "/about",
      element :  <><Navbar/><About/></>
    },
    {
      path : "/contact",
      element :  <><Navbar/><Contact/></>
    },
    {
      // this is for customized user
      path : "/profile/:username",
      element :  <><Navbar/><Profile/></>
    },
  ])
  return (
    <>

        {/* <Navbar></Navbar> */}
        <RouterProvider router={router}/>
        
    </>
  )
}

export default App
