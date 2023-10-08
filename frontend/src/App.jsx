// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layouts/Navbar';
import Hero from './components/Home/Hero';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
    </Router>
  );
}

export default App;
