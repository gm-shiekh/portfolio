import React from 'react'
import styled from 'styled-components'
import {SlPhone} from 'react-icons/sl'
import {TfiEmail} from 'react-icons/tfi'
import {VscGithubAlt} from 'react-icons/vsc'
import {RiSendPlaneFill} from 'react-icons/ri'
import { motion } from 'framer-motion'
import {TiArrowLeftThick} from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Contact = (props) => {
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

        
     <div className="outer">
     <div className="main">
     <div className='top-content'>
      <h1>GET <span className='me'> IN TOUCH</span></h1>
      <p>
       <hr className='dash' />
       I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS..
      <hr className='dash' />
      </p>
      </div>
     </div>

     <div className="grid grid-column-2">
      <div className='left'>
        <h3>Phone <span><SlPhone className='icon' /> +92 306 9786940 </span> </h3>
        <h3>Email <span><TfiEmail  className='icon' /> Gmshiekh1214@gmail.com </span> </h3>
        <h3>Github <span><VscGithubAlt className='icon' />  </span> </h3>
      </div>

      <div className='right'>
        <p>If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.</p>
        <div className="contact-form">
              <form
                // action="https://formspree.io/f/xeqdgwnq"
                method="POST"
                className="contact-inputs"
              >
               <div className='input'>
               <input
                  type="text"
                  placeholder="YOUR NAME"
                  name="username"
                  required
                  autoComplete="off"
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="YOUR EMAIL"
                  autoComplete="off"
                  required
                />
               </div>

                <textarea
                  name="Message"
                  cols="110"
                  rows="5"
                  required
                  autoComplete="off"
                  placeholder="ENTER YOUR MESSAGE"
                ></textarea>

            <button className='button text'>
            <RiSendPlaneFill className='con'  />
          Send Message
          </button>
              </form>
            </div>
      </div>
     </div>
     </div>
    </Wrapper>
    </motion.div>
  )
}

const Wrapper = styled.section`
  
  .back{
    display: none;
  }
  .outer{
    /* margin-top: 5rem; */
  margin-left: 7rem;
  margin-right: 7rem;
  }
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



.grid{
  margin-top: 3rem;
  
  .left{
    h3{
      margin-bottom: 2rem;
    }
    span{
      margin-top: 1rem;
      display: block;

      .icon{
        color: ${({ theme }) => theme.colors.color};
        margin-right: 1rem;
      }
      
    }
  }

  .right{
    
    margin-bottom: 5rem;
    .contact-form {
      /* max-width: 50rem; */
      margin: auto;

      .contact-inputs {
        *:focus {
    outline: none;
}
       
        .input{
         /* padding-left: 0.2rem; */
          display: flex;
          /* flex-direction: row; */
          column-gap: 5rem;
          margin-top: 2rem;
          margin-bottom: 3rem;
          
        }

        textarea::placeholder {font-family: Arial; color: #898181;}


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

  .con{
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
  text-transform: uppercase;
}

.text:hover {
  color: ${({ theme }) => theme.colors.color};  
}
        
      }
    }

  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
.outer{
  margin: 2rem;
}

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

.right{
  
  display: flex;
  flex-direction:column;
    
    margin-bottom: 5rem;
    .contact-form {
      
     margin: 0;

      .contact-inputs {
        
        /* display: flex;
      flex-direction: column; */
       
       .input{
         padding-left: 0;
          display: flex;
          flex-direction: column;
          row-gap: 2rem;
          margin-top: 0rem;
          margin-bottom: 0rem;
          input{
            width: 100%;
          }
        }

   
        textarea{
          width: 100%;
        }



        
      }
    }

  }

}
  
`

export default Contact