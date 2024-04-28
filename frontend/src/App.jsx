import React from 'react'
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Hero/>
        <Service/>
        <About/>
        <Contact/>
        <Toaster/>
      </Router>
    </div>
  )
}

export default App