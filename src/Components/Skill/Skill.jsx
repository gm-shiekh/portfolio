import React from "react";
import styled from "styled-components";
import SkillApi from "./SkillApi";

const Skill = () => {
  return (
    <Wrapper>

        <h1>
            Skills
        </h1>
      <div className="grid grid-three-column">

      
      {SkillApi.map((elem, id) => {
        return(
            <div className="skills">
          <div className="skill">
            <div className="skill-name">
                {elem.name}
            </div>
            <div className="skill-bar">
                <div className="skill-per" per={elem.per}  style={{maxWidth: elem.per}} >
                </div>
            </div>
          </div>
        </div>
        )
      })}
      
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
margin-top: 5rem;
margin-left: 2rem;

h1{
    font-size: 3rem;
    margin-bottom: 2rem;
}

.skills{
  width: 100%;
  max-width: 600px;
  padding-right: 3rem;
  margin-bottom: 2rem;
}

.skill-name{
  font-size: 18px;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
  margin: 20px 0;
}

.skill-bar{
  height: 0.5px;
  background: rgb(124, 122, 122);
  border-radius: 1px;
}

.skill-per{
  
  height: 0.5px;
  background: ${({ theme }) => theme.colors.color};
  border-radius: 1px;
  position: relative;
 
}

.skill-per::before{
  content: attr(per);
  position: absolute;
  padding: 6px 8px;
  background: ${({ theme }) => theme.colors.color};
  border-radius: 4px;
  font-size: 12px;
  top: -35px;
  right: 0;
  transform: translateX(50%);
  color: white;
}

.skill-per::after{
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colors.color};
  top: -15px;
  right: 0;
  transform: translateX(50%) rotate(45deg);
  border-radius: 1px;
  
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
    margin-left: 0rem;

    .skills{

        padding-right: 0rem;
  margin-bottom: 0rem;
}

.skill-name{
  
  margin: 15px 0;
}

}
    
`;

export default Skill;
