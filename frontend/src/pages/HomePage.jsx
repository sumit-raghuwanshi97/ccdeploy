import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Home/Hero'; // Adjust the path as needed

function HomePage() {
  return (
    <div className="bg-[#219EBC] min-h-screen p-4">
      <Hero />
      {/* Other content for the HomePage */}
    </div>
  );
}

export default HomePage;
