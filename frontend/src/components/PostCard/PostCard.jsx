import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {

  const truncate = (input) => 
  input?.length > 300 ? `${input.substring(0, 254)}...` : input

  //truncating the text to show first few lines to the user 
  const summary = truncate(post.content);

  return (
    <div className="bg-blue-50 border p-4 rounded-md shadow-md">
      
      <h2 className="text-lg font-semibold mb-2">{post.caption}</h2>
      
      <p className="text-black">
        {post.company}  |  {post.status}  |  {post.Role}  |  {post.type}  
      </p>
      <p className="text-black mb-4">
      <div dangerouslySetInnerHTML={{ __html:summary}} />
      </p>
      <Link to={`/post/${post._id}`} className="mt-2 my-2 bg-[#fb8500] hover:bg-[#ffb703] text-black font-bold py-2 px-4 rounded-full">
        Read More
      </Link>
    
    </div>
  );
}

export default PostCard;
