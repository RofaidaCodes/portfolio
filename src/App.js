import React, {useState, useEffect, useCallback} from "react";
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/navbar.js';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
 
  return (
    
    <ParallaxProvider>
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
    </ParallaxProvider>
  );
}

export default App;
