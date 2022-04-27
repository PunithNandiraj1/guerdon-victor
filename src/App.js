import React from 'react'
import './App.css';
import Content from './components/Content/Content';
import Device from './components/Device/Device';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Mechanics from './components/Mechanics/Mechanics';
import Navbar from './components/Navbar/Navbar';
import Partners from './components/Partners/Partners';
import Team from './components/Team/Team';
import Tokenomics from './components/Tokenomics/Tokenomics';

function App() {
  return (
   <>
    <Navbar/>
    <Hero/>
    {/* <Device/> */}
    <Content/>
    {/* <Features/> */}
    <Mechanics/>  
    {/* <Tokenomics/> */}

    <Team/>
    <Partners/>
    <Footer/>
   </>
  );
}

export default App;
