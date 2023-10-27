import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layouts/Navbar'; 
import HomePage from './pages/HomePage'; 
import CreatePost from './pages/CreatePost';
import ViewPosts from './pages/ViewPosts';
import RegisterUser from './pages/RegisterUser';
import SignInUser from './pages/LoginUser';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts" element={<ViewPosts />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<SignInUser />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

