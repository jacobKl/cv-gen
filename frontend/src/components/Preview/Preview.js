import React, { useContext } from "react";
import { PreviewWrapper } from "./Preview.styled";
import { CvData } from "../../context/CvDataProvider";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import styled from 'styled-components';
import { getEduIcon, getSkillIcon } from '../../utils/getIcon';

function Preview() {
  const { state } = useContext(CvData);
  const { name, surname, imagePath, position, address, postcode, phone, email, resume } = state.personal;
  const { skills, education } = state;

  return (
    <PreviewWrapper>
      <ThemeToggler />

      <CvDoc>
        <LeftCol>
          <ImageWrapper src={`http://localhost:5000/uploads/${imagePath}`}></ImageWrapper>
          <MainHeader>{name} {surname}</MainHeader>
          <hr/>
          <SmallHeader>{position}</SmallHeader>
          <SubHeader>Details</SubHeader>
          <p>{address}, {postcode}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </LeftCol>
        <RightCol>
          <MainHeader>Resume</MainHeader>
          <p>{resume}</p>
          <MainHeader>Employment & Education</MainHeader>
          {education.map( edu => (
            <>
              <EduHeader><i className={getEduIcon(edu.icon)}></i>{edu.name}</EduHeader>
              <EduSubHeader>{edu.position} {edu.from} - {edu.to}</EduSubHeader>
            </>
          ))}
          <MainHeader>
            Skills
          </MainHeader>
          {skills.map( skill => (
            <>
              <EduHeader><i className={getSkillIcon(skill.icon)}></i>{skill.name}</EduHeader>
              <ProgressBar step={skill.steps}></ProgressBar>
            </>
          ))}
        </RightCol>
      </CvDoc>

    </PreviewWrapper>
  );
}

const CvDoc = styled.div`
  display: flex;
  height: 700px;
  max-width: 500px;
  width: 100%;

  *:not(i){
    user-select: none;
    font-family: 'Playfair Display';
  }

  i{
    padding-right: 5px;
  }

  p{
    font-size: 10px;
    text-align: left;
    margin-top: 0;
  }
`;

const LeftCol = styled.div`
  background: #01796F;
  height: 100%;
  width: 30%;
  padding: 20px; 
  display: flex;
  flex-direction: column;
  font-family: 'Playfair Display';

  h2, h4{
    text-align: center;
  }

  h2, h3, h4, p{
    color: white;
  }

  hr{
    width: 20px;
    height: 2px;
    margin: 0 auto;
    background: white;
    border: none;
  }
`;

const RightCol = styled.div`
  background: white;
  padding: 20px;
  width: 70%;

  color: black;
`;

const ImageWrapper = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const MainHeader = styled.h2`
  font-size: 17px;
  margin-bottom: 10px;
`;

const SubHeader = styled.h3`
  font-size: 10px;
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 5px;
  text-align: left;
`;

const SmallHeader = styled.h4`
  font-size: 8px;
  text-transform: uppercase;
`;

const EduHeader = styled.h3`
  color: black;
  font-size: 15px;
  margin-bottom: 3px;
`;

const EduSubHeader = styled.h5`
  color: #aaa;
  font-size: 12px;
  margin: 0;
`;

const ProgressBar = styled.div`
  width: 200px;
  background: #ccc;
  height: 6px;
  position: relative;

  &:before{
    content: '';
    width: calc( ${props => props.step} * 20% );
    position: absolute;
    height: 100%;
    background: #01796F;
  }
`;

export default Preview;
