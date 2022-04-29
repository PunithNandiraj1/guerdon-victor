import React from 'react'
import './App.css';
import Arenas from './components/Arenas/Arenas';
import Characters from './components/Characters/Characters';
import Content from './components/Content/Content';
import Device from './components/Device/Device';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Mechanics from './components/Mechanics/Mechanics';
import Navbar from './components/Navbar/Navbar';
import Partners from './components/Partners/Partners';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';
import Tokenomics from './components/Tokenomics/Tokenomics';

function App() {
  return (
   <>
    <Navbar/>
    <Hero/>
     <Device/> 
    {/* <Content/>
    <Arenas/> 
    <Features/>  */}
    <Mechanics/>  
    {/* <Tokenomics/> */}
    {/* <Characters/> */}
    <Roadmap/>
    <Team/>
    <Partners/>
    <Footer/>
   </>
  );
}

export default App;
