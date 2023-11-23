import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";

const UserList = ({likers , onClose}) => {
  const handleOnClose = (e)=>{
    if(e.target.id==='container') onClose();
  };

  const HandleOnProfileClick = (userId) => {
    window.open(`http://localhost:3000/user/${userId}`);
  };

  return (
    <div
    id='container'
    onClick={handleOnClose} 
    className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-30
    backdrop-blur-[1px]'>
        <div className="bg-white m-2 divide-y rounded-lg">
          <div className='flex justify-between w-full items-center p-2'>
          <p className="font-semibold text-blue-600 text-lg pl-2">Likes</p>
          <RxCross1 size={20} className='m-2 cursor-pointer' onClick={onClose}/>
          </div>
          <Link className="flex flex-col divide-y p-3 sm:w-[500px]" style={{ maxHeight: '400px', overflowY: 'auto' , maxWidth:'600px'}}>
            {likers.map((liker, index) => (
              <div key={index} onClick={()=>window.open(`http://localhost:3000/user/${liker._id}`)} className='flex m-1 items-center cursor-pointer'>
              <FaUserCircle size={50} className='my-2.5 ml-2.5'/>
              <div className="grid text-black p-1 m-1">
                <span className='font-semibold text-lg'>{liker.name}</span>
                <span className='flex text-sm text-gray-600'>
                   <p className='mr-1'>{liker.email}</p>
                </span>
              </div>
              </div>
            ))}
          </Link>
        </div>
    </div>
  )
}

export default UserList
