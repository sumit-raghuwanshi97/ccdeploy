import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <div className="mt-6 text-center bg-[#8ecae6] p-6">
        <h1 className="text-6xl font-bold">Welcome to Campus-Connect</h1>
        <p className="mt-4 text-xl">Discover and share your experiences. Join our community and start sharing your stories with others. Discover valuable insights and experiences from like-minded individuals.</p>
        <div className="mt-4">
          <Link to="/create" className="bg-[#fb8500] hover:bg-[#ffb703] text-black font-bold py-3 px-6 text-lg rounded inline-block">
            Create Post
          </Link>
          <Link to="/view" className="bg-[#fb8500] hover:bg-[#ffb703] text-black font-bold py-3 px-6 text-lg rounded ml-4 inline-block">
            View Posts
          </Link>
        </div>
      </div>

    </>
  )
}

export default Hero