import React from 'react'
import {
    Routes,
    Route,
    useLocation
  } from "react-router-dom";

  import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

  const location = useLocation();
   
   const variants = {
    initial: {
      
        x: -2000 ,
        opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      // scale: 1,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 200, damping: 30 },
       
      },
    },
    exit:{
      
        x:  0,
        opacity: 0,
        // scale: 0.5,
        // transition: 'ease-in',
        transition: {
          // ease: "linear",
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        
      }
    },
  }
  return (
    <AnimatePresence initial={false} >
        <Routes location={location} key={location.pathname}>
      
      <Route exact path="/" element = {<Home variants={variants}/>}/> 
      <Route exact path="/about" element = {<About variants={variants}/>}/> 
      <Route exact path="/portfolio" element = {<Portfolio variants={variants}/>}/> 
      <Route exact path="/contact" element = {<Contact variants={variants}/>}/> 
  </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes