import React from 'react';

function PostCard({ post }) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
      <p>Company: {post.companyName}</p>
      <p>Status: {post.status}</p>
      <p>Role: {post.role}</p>
      <p>Post Type: {post.postType}</p>
      <p className="truncate">{post.description}</p>
      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        Read More
      </button>
    </div>
  );
}

export default PostCard;
