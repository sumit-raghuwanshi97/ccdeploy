import React from 'react';
import { Link } from 'react-router-dom';
import {GoDotFill} from "react-icons/go";
import { AiFillCheckCircle , AiFillCloseCircle, AiOutlineUser } from 'react-icons/ai';
import { BiSolidCommentDetail ,  BiSolidLike} from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaUserCircle } from 'react-icons/fa';


function PostCard({ post }) {

  const truncate = (input) => 
  input?.length > 300 ? `${input.substring(0, 254)}...` : input

  //truncating the text to show first few lines to the user 
  const summary = truncate(post.content);

  return (
    <div className="bg-blue-50 divide-y  pt-3 rounded-md shadow-md hover:shadow-lg hover:shadow-blue-200">
      <div className='px-3'>
      <Link to={`/post/${post._id}`} >
      <div className='flex justify-between'> 
      <h2 className="text-lg font-semibold ">{post.caption}</h2>
      <span class="flex items-center space-x-1">
        {
        post.status==='Selected'?
        (<span class="material-icons text-green-600"><BsPatchCheckFill size={21}/></span>)
       :(<span class="material-icons text-[#FF0000]"><AiFillCloseCircle size={21}/></span>)
        } 
        <span>{post.status}</span>
      </span>
      </div>
      <div class="flex items-center text-gray-600 space-x-2 mb-3">
      <span class="flex items-center space-x-1">
        <span class="material-icons text-gray-600 text-xs"><GoDotFill/></span>
        <span>{post.company}</span>
      </span>
      <span class="flex items-center space-x-1">
        <span class="material-icons text-gray-600 text-xs"><GoDotFill/></span>
        <span>{post.type}</span>
      </span>
      <span class="flex items-center space-x-1">
        {
        post.status==='Selected'?
        (<span class="material-icons text-green-600"><AiFillCheckCircle/></span>)
       :(<span class="material-icons text-[#FF0000]"><AiFillCloseCircle/></span>)
        } 
        <span>{post.status}</span>
      </span>
      </div>
      <span>
        <div className='flex text-sm my-2 items-center'>
          <FaUserCircle size={33}/>
          <div className='mx-2'>
          <p className='mx-0' >{post.owner.name}</p>
          <p className='text-xs text-gray-600'>{post.Role} | {post.owner.graduationYear}</p>
          </div>
        </div>
      </span>
      {/* <p className="text-[#3c3c3c] text-sm antialiased line-clamp-3 mb-4 whitespace-nowrap">
      <div dangerouslySetInnerHTML={{ __html:summary}} />
      </p> */}
      {/* <Link to={`/post/${post._id}`} className="mt-2 my-2 bg-[#fb8500] hover:bg-[#ffb703] text-black font-bold py-2 px-4 rounded-full">
        Read More
      </Link> */}
      </Link>
      </div>
      <div className='flex text-xs border-gray-400 text-gray-600 justify-left items-center py-2 px-3'>
        <div className='flex justify-between items-center'>
          <BiSolidLike size={15} className='mr-1'/>
          <div className='mr-5'>{post.likes.length} Likes</div>
          <BiSolidCommentDetail size={15} className='mr-1'/>
          <p>{post.comments.length} Comments</p>
         
        </div>
      </div>

    </div>
  );
}

export default PostCard;
