import React from 'react'
import styled from 'styled-components'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiBriefcaseAlt} from 'react-icons/bi'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import {IoPerson, IoBriefcase, IoChatbubblesSharp} from 'react-icons/io5'



const Home = (props) => {
  return (
    <motion.div 
    // initial={{width:0}}
    // animate ={{width:'100%'}}
    // exit={{x:window.innerWidth}}
    // transition= {{duration:0.3}}

    variants={props.variants}
    initial='initial'
    animate ='animate'
    exit='exit'
    >
    <Wrapper >
      <div className=' desktop grid grid-two-column'>
       <div className='photo'>
        <img  className='circular--square' src="./profile.jpg" alt="" />
       </div>
       
       <div className='profile'>
        <h3>HI THERE !</h3>

        <h1>
          I'M <span className='typewriter'> 
          <Typewriter
            words={['MUSTAFA', ' A WEB DEVELOPER', 'CODER']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
          </span>
        </h1>

        <p>
        I'm a Freelance UI/UX Designer and Developer based in London, England.
         I strives to build immersive and beautiful web applications through 
         carefully crafted code and user-centric design.
        </p>

        <div className='butons'>
        <Link to="/about" className='button text'>
        <BsFillPersonFill className='icon'/>
          MORE ABOUT ME
        </Link>

        <Link to="/portfolio" className='button-2 text-2'>
          <BiBriefcaseAlt className='icon'/>
          PORTFOLIO
        </Link>
        </div>
       </div>
      </div>

    <div className="mobile grid grid-three-column">
    <NavLink to='/about'>
      <div className='box'>
      <IoPerson className='icon' size={'2.4rem'}/>
      <h3>   ABOUT ME</h3>
      </div>
      </NavLink>


      <NavLink to='/portfolio'>
      <div className='box'>
      < IoBriefcase className='icon' size={'2.4rem'}/>
      <h3>   MY PORTFOLIO</h3>
      </div>
      </NavLink>

      <NavLink to='/contact'>
      <div className='box'>
      < IoChatbubblesSharp className='icon' size={'2.4rem'}/>
      <h3>  GET IN TOUCH</h3>
      </div>
      </NavLink>
      
    </div>
    </Wrapper>
    </motion.div>
  )
}

const Wrapper = styled.section`

.mobile{
  display: none;
}

.grid{
  margin-top: 15rem;
}
  h2{
    color: black;
  }

  .photo{
    h2{
      /* padding-left: 5rem; */
    }

    padding-left: 30rem;

    .circular--square { 
      
      border-radius: 50%;
      width: 300px;
      height: 300px;
      border: 0.1rem solid ${({ theme }) => theme.colors.color};
    }
  }

  .profile{
    margin-top: 2.5rem;
    /* border-left: 1px solid white; */

    p{
      margin-top: 1.5rem;
      color: black;
      display: inline-block;
      padding-right: 6rem;
      line-height:2em;
    }

    h1{
      font-weight: 600;
      margin-top: 1.8rem;
      .typewriter{
        color: ${({ theme }) => theme.colors.color};
        font-weight: 700;
      }
    }

    .icon{
      margin-right: 1rem;
      /* text-align: center; */
      /* margin-top: 8rem; */
    }

    .button {
  border: 1px solid ${({ theme }) => theme.colors.color};
  border-radius: 3px;
  width: 20rem;
  height: 4.5rem;
  display: inline-block;
  border-radius: 100px;
  padding: 0.5rem;
  margin-top: 2rem;
  
  background: linear-gradient(to left, ${({ theme }) => theme.colors.color} 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .3s ease-out;
  cursor: pointer;
}

.button:hover {
  background-position: left bottom;
}

.text {
  text-align: center;
  font-size: 16px;
  line-height: 30px; 
  color: white ;
  transition: all .3s ease-out;
  display: inline-block;
}

.text:hover {
  color: ${({ theme }) => theme.colors.color};  
}


  //button-2

    .button-2 {
  border: 1px solid ${({ theme }) => theme.colors.color};
  border-radius: 3px;
  width: 18rem;
  height: 4.5rem;
  display: inline-block;
  border-radius: 100px;
  padding: 0.5rem;
  margin-top: 2rem;
  
  background: linear-gradient(to right, ${({ theme }) => theme.colors.color} 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .3s ease-out;
  cursor: pointer;
  margin-left: 2rem;
}

.button-2:hover {
  background-position: left bottom;
}

.text-2 {
  text-align: center;
  font-size: 16px;
  line-height: 30px; 
  color: ${({ theme }) => theme.colors.color} ;
  transition: all .3s ease-out;
  display: inline-block;
}

.text-2:hover {
  color: white;  
}





  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .desktop{
      display: none;
    }

    .mobile{
  display: grid;
}

    .grid{
      margin-top: 3rem;
  gap: 3.2rem;
}
   .grid-three-column{
    text-align: center;
    margin: 2rem;
    
   
    .box{
      height: 28vh;
      border: 1px solid ${({ theme }) => theme.colors.color};
      padding-top: 10vh;
      background-color: #fca982;
      color: white;
      border-radius: 3%;
      justify-content: center;
    }

    .icon{
        color:  ${({ theme }) => theme.colors.color} ;
      }

    h3{
      font-size: 2.4rem;
      font-weight: bold;

      
    }

   }
  

  }
`;


export default Home