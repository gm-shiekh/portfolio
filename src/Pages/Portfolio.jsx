import React from 'react'
import styled from 'styled-components'
import Pfolio from '../Components/portfolio/Pfolio'
import { motion } from 'framer-motion'
import {TiArrowLeftThick} from 'react-icons/ti'
import { Link } from 'react-router-dom'


const Portfolio = (props) => {
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
    <Wrapper    >
    <div className='back'>
        <Link to="/" >
            <TiArrowLeftThick  className='icon' color='white' size='3.2rem'/>
          </Link>
        </div>
      <Pfolio/>
    </Wrapper>
    </motion.div>
  )
}


const Wrapper = styled.section`
  
  .back{
  display: none;
}
  /* margin-top: 0rem; */

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .back{
        z-index: 7;
        position: fixed;
      height: 85px;
  width: 85px;
  background-color: ${({ theme }) => theme.colors.color};
  border-radius: 50%;
  display: inline-block;
  margin-left: -3.2rem;
  margin-top: -5.3rem;
  /* position: absolute; */

  .icon{
      position: absolute;
      margin-left: 4rem;
      margin-top: 4.2rem;
    }

    }
  }
`

export default Portfolio