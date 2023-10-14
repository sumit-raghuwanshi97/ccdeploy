import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layouts/Navbar'; 
import HomePage from './pages/HomePage'; 
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePost />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

