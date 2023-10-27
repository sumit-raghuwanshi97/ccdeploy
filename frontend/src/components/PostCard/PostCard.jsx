import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="bg-[#8ECAE6] border p-4 rounded-md shadow-md">
      
      <h2 className="text-lg font-semibold mb-2">{post.title} | {post.year}</h2>
      
      <p className="text-black">
        {post.companyName}  |  {post.status}  |  {post.role}  |  {post.postType}  
      </p>
      <p className="text-black mb-4">
        {post.details}
      </p>
      <Link to="/" className="mt-2 my-2 bg-[#fb8500] hover:bg-[#ffb703] text-black font-bold py-2 px-4 rounded-full">
        Read More
      </Link>
    
    </div>
  );
}

export default PostCard;
