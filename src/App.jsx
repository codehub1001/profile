import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App