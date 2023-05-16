import React from 'react'
import styled from 'styled-components'
import Portfolio_data from './Portfolio_data'
import Card from './Card'

const Pfolio = () => {
  return (
    <Wrapper>
        <>
      <section className='Portfolio top' id='portfolio'>
        <div className='continer'>
          <div className='heading text-center '>
            
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })}
          </div>
        </div>
      </section>
    </>
    </Wrapper>
  )
}
 
const Wrapper = styled.section`
 

.continer {
  max-width: 95%;
  margin: auto;
}
.d_flex {
  display: flex;
  justify-content: space-between;
}


button {
  border: none;
  outline: none;
  background-color: none;
}

.btn_shadow {
  padding: 10px 15px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  color: #000;
  transition: 0.5s;
}
.btn_shadow {
  /* border: 1px solid gray; */
  /* background: linear-gradient(145deg, #e2e8ec, #ffffff); */
  box-shadow: 1px 1px 2px #cbcbcb, -4px -4px 8px #ffffff;
}


.btn_shadow:hover {
  background: ${({ theme }) => theme.colors.color};
  color: white;
  transform: translateY(-10px);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
}
.box_shodow {
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 10px;
}
.row,
.left,
.right {
  width: 50%;
}
.top {
  /* margin-top: 80px; */
}
.mtop {
  margin-top: 40px;
}
.heading {
  margin: 50px 0 50px 0;
}
.heading h4 {
  color: ${({ theme }) => theme.colors.color};
  letter-spacing: 2px;
  font-weight: 400;
}
.heading h1 {
  font-size: 60px;
  color: #3c3e41;
}
h1 {
  color: #3c3e41;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;
}
p {
  color: #3c3e41;
}
.text-center {
  text-align: center;
}
.primary_color {
  color: ${({ theme }) => theme.colors.color};
}











 .Portfolio {
  position: relative;
  margin-bottom: 3rem;
}
.Portfolio .box {
  border-radius: 10px;
  position: relative;
  /* margin-bottom: 5rem; */
}
.Portfolio .box:hover {
  background: none;
 
  transform: translateY(-0);
}

.Portfolio .img {
  /* height: 300px; */
  overflow: hidden;
  transition: 0.5s;
}
.Portfolio img {
  width: 100%;
  border-radius: 10px;
  transition: 0.5s;
}
.Portfolio .box .img:hover img {
  transform: scale(1.2);
}
.Portfolio .category {
  margin: 20px 0 30px 0;
  text-transform: uppercase;
}
.Portfolio .category span {
  color: ${({ theme }) => theme.colors.color};
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
}
.Portfolio .arrow {
  position: absolute;
  right: 30px;
  bottom: 11%;
  transform: rotate(-45deg);
  color: ${({ theme }) => theme.colors.color};
  opacity: 0;
  transition: 0.5s;
}
.Portfolio .title:hover .arrow {
  opacity: 1;
}
.Portfolio h2 {
  font-size: 18px;
  transition: 0.5s;
  padding-bottom: 30px;
}
.Portfolio .box:hover h2 {
  color: ${({ theme }) => theme.colors.color};
}
.Portfolio .box:hover {
  color: black;
}
/*------------popup--------*/
body.active-modal {
  overflow-y: hidden;
  
}

.btn-modal {
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 18px;
}

.modal,
.overlay {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 9999;
  
  
}


.overlay {
  background-color: white;
  justify-content: center;
  align-items: center;
}
.modal-content {
  position: absolute;
  top: 5%;
  left: 8%;
  line-height: 1.4;
  background: white;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 85%;
  min-width: 60%;
  z-index: 9999;
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  padding: 50px;
  border-radius: 10px;
  
  margin-bottom: 10rem;
}

.modal-text {
  padding: 0 100px 0 50px;
}
.modal-text h1 {
  margin: 20px 0 20px 0;
  font-size: 30px;
}
.modal-text p {
  font-size: 17px;
  margin-bottom: 20px;
  line-height: 25px;
}
.modal-text button {
  /* margin-right: 10px; */
  color: ${({ theme }) => theme.colors.color};
}
.modal-text button i {
  /* margin-left: 10px; */
}
.modal-text button.close-modal {
  position: absolute;
  top: 15px;
  right: 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50%;
  padding: 0 0;
  font-size: 30px;
}
.close-arw {
  margin: 5px;
  
}
/*------------popup--------*/
@media (max-width: 768px) {
 

  .heading h1 {
  font-size: 4rem;
  
}
.heading {
  margin: 20px 0 20px 0;
}

  .continer {
  max-width: 100%;
  margin: 0 1.5rem 0 1.5rem ;
}


 
  .grid {
    grid-template-columns: 1fr;
  }
  .left,
  .right {
    width: 100%;
  }

  .modal,
  .overlay {
    overflow: scroll;
  }

  .modal .modal-img {
    margin: 50px 0 50px 0;
  }
  .modal-content {
    padding: 0px;
    padding: 25px 20px;
    
    flex-direction: column;
  }
  .modal .right,
  .modal .left {
    padding: 0;
  }
}



`;
export default Pfolio