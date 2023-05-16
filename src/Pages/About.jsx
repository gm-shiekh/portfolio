import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import {FaDownload} from 'react-icons/fa'
import Resume from '../Components/Resume/Resume'
import Skill from '../Components/Skill/Skill'
import {TiArrowLeftThick} from 'react-icons/ti'
// import { NavLink } from 'react-router-dom'


const About = (props) => {
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
      
     
    <Wrapper>
    <div className='back'>
        <Link to="/" >
            <TiArrowLeftThick  className='icon' color='white' size='3.2rem'/>
          </Link>
        </div>

       
      <div className='main'>
      <div className='top-content'>
      <h1>ABOUT <span className='me'>ME</span></h1>
      <p>
       <hr className='dash' />
      I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
      <hr className='dash' />
      </p>
      </div>
        
        <div className='grid-main grid-two-column'>
          <div className='photo'>
            <figure>
              <img src="./profile.jpg" alt=""  className='img'/>
            </figure>
          </div>

          <div className='personal-data'>
            <div  className='grid grid-two-column' >
            <div>
                <h3>First Name <span>Ghulam </span> </h3>
              <h3> Last Name <span> Mustafa</span> </h3>
              <h3>BirthDate <span> Dec 1998</span></h3>
              <h3> Nationality <span>Pakistani </span></h3>
              <h3>Experince <span>Graduate </span></h3>
              <h3>Address <span>Lahore </span> </h3>
                </div>

              
                <div >
                <h3> Availability <span>Yes </span> </h3>
              <h3> Languages <span>English,Urdu</span></h3>
              <h3>Phone <span>+923069786940</span></h3>
              <h3> Email <span>gmshiekh1214@gmail.c</span></h3>
              <h3>LinkedIn <span>...</span> </h3>
              <h3>Github <span>...</span></h3>
                </div>
              
            </div>

           
          <a href='Ghulam Mustafa.pdf' download="CV.pdf" >
          <button className='button text'>
            <FaDownload className='icon'  />
          DOWNLOAD MY CV
          </button>
          </a>
          </div>
        </div>

        <hr className='line' />

        <Resume/>
        <Skill/>
       
      </div>

      
     
        
       
        

    </Wrapper>
    </motion.div>
  )
}

const Wrapper = styled.section`

.back{
  display: none;
}

  .main{
    margin-top: 5rem;
  margin-left: 7rem;
  margin-right: 7rem;
  }
/* padding-right: 2rem; */
.top-content{

  text-align: center;
  h1{
    
    font-weight:900;
    font-size: 6rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    .me{
      color: ${({ theme }) => theme.colors.color};
    }
   
  }

  p{
    margin-top: 1rem;
    margin-left: 2rem;
  }

 

  .dash{
    width: 3rem;
    display: inline-block;
    margin-left: 2rem;
    margin-right: 2rem;
    border-top: 2px solid ${({ theme }) => theme.colors.color} ;
    margin-bottom: 0.4rem;
  }



}

.grid-main{
  display: grid;
  margin-top: 5rem;
  gap: 4.5rem;

}

.photo{
  
  display: flex;
    justify-content: center;
    align-items: center;
   /* z-index: 1; */
}

figure {
    position: relative;
    &::after {
      content: "";
      width: 75%;
      height: 95%;
      border: 0.6rem solid ${({ theme }) => theme.colors.color} ;
      
      position: absolute;
      left: 19%;
      top: 2.8rem;
      z-index: -1;
    }
  }

.img{
  margin-left: 8rem;
  width: 77%;
    height: 77%;
    
   
}

.personal-data{
  margin-top: 7rem;
  

  h3{
    font-size: 1.7rem;
    margin-bottom: 2.7rem;
    color: gray;

    span{
      color: black;
      font-weight: 600;
      
      margin-left: 2rem;
    }
  
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

  .icon{
    margin-right: 1rem;
  }
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


}
 

.line{
  margin-top: 6rem;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  
      
      .back{
        z-index: 7;
        position: fixed;
      height: 85px;
  width: 85px;
  background-color: ${({ theme }) => theme.colors.color};
  border-radius: 50%;
  display: inline-block;
  margin-left: -3rem;
  margin-top: -3.5rem;
  /* position: absolute; */

  .icon{
      position: absolute;
      margin-left: 4rem;
      margin-top: 4.2rem;
    }

    }

    .main{
      margin: 2rem;
      margin-top: 0;
    }

      .top-content{

text-align: center;
h1{
  font-size: 4rem;
}

p{
  margin-top: 1rem;
  margin-left: 0rem;
}



.dash{
  display: none;
}



}

      figure {
    position: relative;
    &::after {
      border: none;
    }
  }

.img{
  margin-left: 0rem;
  /* margin: 4rem; */
  width: 100%;
    height: 100%;
    
   
}

.personal-data{
  margin-top: 0rem;
  
  .grid{
  gap: 0rem;
}

  h3{
    font-size: 1.7rem;
    margin-bottom: 2.7rem;
    color: gray;

    span{
      color: black;
      font-weight: 600;
      display: block;
      margin-left: 0rem;
      margin-top: 0.5rem;
    }
  
}





}


  }

`;

export default About