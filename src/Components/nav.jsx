import React from "react";
import { Fade as Hamburger } from "hamburger-react";
import styled, { keyframes } from "styled-components";
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {IoHome} from 'react-icons/io5'

const Navbar = () => {
    
    
  const [isOpen, setOpen] = useState(false)
  const [name, setname] = useState('continer')

  return (
    <Wrapper>

        <div className="main">

        <div className={name} >

<div className="hamburger">
<Hamburger size={20} color='white' toggled={isOpen} toggle={setOpen} onToggle={toggle=> {if (toggle){
    setname('continer-outline')
}
else {
    setname('continer')
}}} />
</div>



</div>

        <div>
        <ul className="navbar-lists" >
                <li>
                    
                    <NavLink to="/"
                    onClick={()=> setOpen(!isOpen) & setname('continer')} className="navbar-link link-1">
                      
                      Home
                      
                      <IoHome className="icon"/>
                      
                      
                      </NavLink>
                      
                </li>

                <li>
                <NavLink to="/about" className="navbar-link link-2"
                onClick={()=> setOpen(!isOpen) & setname('continer')}>
                  About</NavLink>
                  
                </li>
                <li><NavLink to="/portfolio" className="navbar-link link-3" onClick={()=> setOpen(!isOpen) & setname('continer')}>
                  Portfolio
                  </NavLink>
                  
                  </li>
                
                <li><NavLink to="/contact" className="navbar-link link-4" onClick={()=> setOpen(!isOpen) & setname('continer')}>
                  Contact
                  </NavLink>
                  
                  </li>
                  
             
                    
                   
                    
                    
            </ul>
        </div>
        </div>
      

      
    </Wrapper>
  );
};

const growDown = keyframes`
    
   0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  
  80% {
    transform: translateX(0px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const Wrapper = styled.section`

.main{
    margin: 5rem;
   
    position: fixed; 
    
}


  .continer {
    margin: 5rem;
    background-color: #333333;
    position: fixed;
    
    z-index: 1;
    width: 5rem;
    height: 5rem;
    border-radius: 100px;
    transition: ease 0.5s;
    
  }
  .continer-outline{
   
    margin: 5rem;
    background-color: #333333;
    position: fixed;
    z-index: 1;
    width: 5rem;
    
    border-radius: 100px;
    transition: ease 0.5s;
    height: 30rem;
    .navbar-lists{
        visibility: visible;
        
         .link-1 {

                            transform-origin: top center;
                            animation: ${growDown} 300ms 60ms ease-in-out backwards;
                            
                        }
                        .link-2 {
                            transform-origin: top center;
                            animation: ${growDown} 300ms 120ms ease-in-out backwards;
                        }
                        .link-3 {
                            transform-origin: top center;
                            animation: ${growDown} 300ms 180ms ease-in-out backwards;
                        }
                        .link-4 {
                            transform-origin: top center;
                            animation: ${growDown} 300ms 240ms ease-in-out backwards;
                        }
    }

    .icon{
        display: inline;
    }
  }

  .navbar-lists{
   
    /* transition: 0.3s ease; */
    /* display: none; */
  }

  .navbar-lists{
    padding: 0 20px;
    margin: 10rem;
    
  }

  .navbar-lists li{
  /* list-style: none; */
  padding: 12px 0;
  /* position: absolute; */
  /* display: block; */
  
  
  }

  .navbar-link{
    
    display: inline-block;
         
         text-decoration: none;
         font-size: 1.6rem;
         font-weight: 500;
         font-weight: normal;
         
         text-transform: uppercase;
         color: ${({ theme }) => theme.colors.black};
         /* transition: all 3s ease-in-out; */
  
  }

`;



export default Navbar;
