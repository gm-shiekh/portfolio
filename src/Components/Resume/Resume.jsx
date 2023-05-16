import React from 'react'
import styled from 'styled-components'
import Card from './Card';
import ResumeApi from './ResumeApi';

const Resume = () => {
  return (
    <Wrapper>

        <div className="grid grid-two-column">

            <div className="education">
                <h1>EDUCATION</h1>
                <div className="content">
                  {
                    ResumeApi.map((elem,id)=>{
                      if(elem.category === 'education'){
                        return <Card key={id} title= {elem.title} year={elem.year} institute={elem.institute} desc={elem.desc} />
                      }
                    })
                  }
                </div>

            </div>

            <div className="education">
                <h1>EXPERIENCE</h1>
                <div className="content">
                  {
                    ResumeApi.map((elem,id)=>{
                      if(elem.category === 'education'){
                        return <Card key={id} title= {elem.title} year={elem.year} institute={elem.institute} desc={elem.desc} />
                      }
                    })
                  }
                </div>

            </div>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`

margin-left: 2rem;

/* .grid .education::before{
  content: "";
  position: absolute;
  top: 100%;
  top: 12;
  left: 1;
  height: 100vh;
  width: 5px;
  background: #d9dee2;
  z-index: -2;
} */

    h1{
      font-size: 2.5rem;
    }

    .education{
     .content{
      border-left: 1px solid ${({ theme }) => theme.colors.color};
      padding-left: 2.9rem;
      position: relative;
     }
     
    }

    .education{
      .box{
        margin-top: 4rem;
        p{
          margin-right: 4rem;
        }
        position: relative;
      }

      .box::before {
  content: "";
  position: absolute;
  top: 0%;
  left: -7%;
  height: 11px;
  width: 11px;
  background: #fff;
  border: 2px solid ${({ theme }) => theme.colors.color};
  border-radius: 50%;
  z-index: 2;
  transition: 0.5s;
}

      
      .year{
        color: #474444;
      }

      .title{
        margin-bottom: 1rem;
      }
      .school{
        font-weight: bold;
      }
    }


    @media (max-width: ${({ theme }) => theme.media.mobile}){


      margin-left: 0rem;

      .education{
     .content{
      border-left: 1px solid ${({ theme }) => theme.colors.color};
      padding-left: 0rem;
      position: relative;
     }
     
    }

      .education{
      .box{
        padding-left: 2.9rem;
        margin-top: 4rem;
        p{
          margin-right: 0rem;
        }
        position: relative;
      }

      .box::before {
  content: "";
  position: absolute;
  top: 0%;
  left: -2.5%;
  height: 11px;
  width: 11px;
  background: #fff;
  border: 2px solid ${({ theme }) => theme.colors.color};
  border-radius: 50%;
  z-index: 2;
  transition: 0.5s;
}

      
      .year{
        color: #474444;
      }

      .title{
        margin-bottom: 1rem;
      }
      .school{
        font-weight: bold;
      }
    }
    }

`;

export default Resume