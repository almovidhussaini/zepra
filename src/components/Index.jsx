import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Aboutus from './aboutus/Aboutus';
import Tokenomics from './tokenomics/Tokenomics';
import Footer from './footer/Footer';
import Zepra from './zepra/Zepra';

const Index = () => {
    return (
        <>
          <Navbar/>  
          <Home/>
          <Zepra/>
          <Aboutus/>
          <Zepra/>
          <Tokenomics/>
          <Footer/>
        </>
    );
};

export default Index;