import React, { useContext } from "react";
import { CvData } from "../../context/CvDataProvider";
import { CreatorPart } from "./CreatorStyled";
import PersonalSection from "../PersonalSection/PersonalSection";
import EducationSection from "../EducationSection/EducationSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import CustomizeSection from "../CustomizeSection/CustomizeSection";
import { Route, useHistory } from "react-router-dom";
import { LOCAL_STORAGE_BACKUP } from "../../actions/index";

function Creator() {
  let history = useHistory();

  const { dispatch } = useContext(CvData);

  const changeStep = (step) => {
    dispatch({ type: LOCAL_STORAGE_BACKUP });
    history.push(step);
  };

  return (
    <CreatorPart>
      <Route exact path="/" render={() => <PersonalSection changeStep={changeStep} />} />
      <Route exact path="/1" render={() => <EducationSection changeStep={changeStep} />} />
      <Route exact path="/2" render={() => <SkillsSection changeStep={changeStep} />} />
      <Route exact path="/3" render={() => <CustomizeSection changeStep={changeStep} />} />
    </CreatorPart>
  );
}

export default Creator;
