import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const heroStyle = {
    maxWidth: 'calc(100%)',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '15px',

     // Responsive styles for small screens and above (sm and larger)
  '@media (max-width: 640px)': {
   maxWidth: 'calc(100%-3in)',
  },

  };

  return (
    <>
      <div style={heroStyle} className="mt-1 sm:mt-6 text-center sm:bg-[#8ecae6] p-1 sm:p-6 shadow-md mb-4">
        <h1 className="sm:text-6xl font-bold">Welcome to Campus-Connect</h1>
        <p className="mt-4 sm:text-xl">Discover and share your experiences. Join our community and start sharing your stories with others. Discover valuable insights and experiences from like-minded individuals.</p>
        <div className="block space-y-4 sm:space-y-0 sm:mt-4">
          <Link to="/create" className="bg-[#fb8500] hover:bg-[#ffb703] text-black font-bold py-3 px-6 text-lg rounded-full inline-block">
            Create Post
          </Link>
          <Link to="/posts" className="bg-[#fb8500] hover:bg-[#ffb703] text-black font-bold py-3 px-6 text-lg rounded-full ml-4 inline-block">
            View Posts
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
