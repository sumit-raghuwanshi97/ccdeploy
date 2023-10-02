// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layouts/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;
