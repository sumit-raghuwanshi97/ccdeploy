import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'; 

const Navbar = () => {
 
  const [user,setUser] = useState(false);
  useEffect(()=>{{
    const authenticated = localStorage.getItem("authenticated");
    if(authenticated){
    setUser(true);
    } 
    else setUser(false);
  }});
  
  return (
    <nav className="flex justify-between p-4 bg-[#023047] text-white">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-16 h-16 mr-2" />
        <span className="font-bold text-2xl">Campus-Connect</span>
      </div>
      <div className="flex space-x-4 items-center">
        <Link to="/" className="text-lg hover:underline">Home</Link>
        <Link to="/posts" className="text-lg hover:underline">Posts</Link>
        <Link to="/resources" className="text-lg hover:underline">Resources</Link>
        <Link to="/login" className="rounded p-4 bg-[#fb8500] hover:bg-[#ffb703] text-black py-1 px-6 text-lg inline-block">Log in</Link>
        <Link to="/register" className="rounded p-4 bg-[#fb8500] hover:bg-[#ffb703] text-black py-1 px-6 text-lg inline-block">Sign up</Link>
        

      </div>
    </nav>
  )
}

export default Navbar
