import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'; 
import { FaUserCircle } from "react-icons/fa";
import NavDropDown from '../DropDown/NavDropDown';
import { Alert } from 'react-alert';
import { useSelector } from 'react-redux';

const Navbar = ({ user }) => {
 
 
  // const  [username , setUsername] = useState('');
  const [isDropdownVisible ,setDropdownVisible] = useState(false);
  // const { user } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.user);


  const toggledropdown = ()=>{
    setDropdownVisible(!isDropdownVisible);
  };
  

  return (
    <nav className="flex flex-col sm:flex-row items-center sm:justify-between p-4 bg-[#023047] text-white">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-16 h-16 mr-2" />
        <Link to="/" className="font-bold text-2xl">Campus-Connect</Link>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
        <Link to="/" className="text-lg hover:text-gray">Home</Link>
        <Link to="/posts" className="text-lg hover:underline">Posts</Link>
        <Link to="/resources" className="text-lg hover:underline">Resources</Link>
        {
        isAuthenticated ? 
        (
          <>
          <button onClick={toggledropdown} className="flex space-x-2 items-center hover:text-[#ffb703]">
          <span><FaUserCircle size={21}/></span><span>{user}</span></button> 
          </>
        )
        :
        (
        <>
        <Link to="/login" className="rounded p-4 bg-[#fb8500] hover:bg-[#ffb703] text-black py-1 px-6 text-lg inline-block">Log in</Link>
        <Link to="/register" className="rounded p-4 bg-[#fb8500] hover:bg-[#ffb703] text-black py-1 px-6 text-lg inline-block">Sign up</Link>
        </>
        )
      }
      </div>
      {isDropdownVisible && <NavDropDown/>}
    </nav>
  )
}

export default Navbar;
