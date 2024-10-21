import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Links from './components/L';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>RAZEEN MAHROOF!</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/links" element={<Links />} />
        <Route path="/education" element={<Education />} />
        
      </Routes>
    </div>
  );
};

export default App;

