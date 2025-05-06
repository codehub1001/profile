import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Contact/>
    </>
  )
}

export default App