import React from 'react';
import { Link } from 'react-router-dom';
import { LuUser } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import { MdOutlineBookmarkBorder, MdOutlineLibraryBooks } from "react-icons/md";
import { TbPencil } from "react-icons/tb";
import { useSelector } from 'react-redux';






function NavDropDown(){

    const { user } = useSelector((state) => state.user);
    return(
        // <div className='origin-top-right absolute right-0 top-20 w-40 mt-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
        //    <p>Drop Down</p>
        // </div>

        <div className='origin-top absolute right-0 top-20  bg-white text-black border-t-4 border-green-600'>
            <div className='hover:bg-[#E0F4FF]'>
            <Link to={`user/${user._id}`}  target="_blank" className='flex items-center space-x-5 mr-3 p-4'>
                <span><LuUser size={21}/></span>
                <span className='pr-10'>My Profile</span>
            </Link>
            </div>

            <div className='hover:bg-[#E0F4FF]'>
            <Link className='flex items-center space-x-5 mr-3 p-4'>
                <span><MdOutlineLibraryBooks size={21}/></span>
                <span className='pr-10'>My Posts</span>
            </Link>
            </div>

            <div className='hover:bg-[#E0F4FF]'>
            <Link className='flex items-center space-x-5 mr-3 p-4'>
                <span><MdOutlineBookmarkBorder size={21}/></span>
                <span className='pr-10'>Saved</span>
            </Link>
            </div>

            <div className='hover:bg-[#E0F4FF]'>
            <Link to='/logout' className='flex items-center space-x-5 mr-3 p-4'>
                <span><TbPencil size={21}/></span>
                <span className='pr-10'>Edit profile</span>
            </Link>
            </div>

            <div className='hover:bg-[#E0F4FF]'>
            <Link to='/logout' className='flex items-center space-x-5 mr-3 p-4'>
                <span><TbLogout size={21}/></span>
                <span className='pr-10'>Logout</span>
            </Link>
            </div>
            
        </div>
    );
}

export default NavDropDown;