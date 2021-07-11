import React from "react";
import { StyledSkillPicker, StyledSteps, StyledStep } from "./SkillLevelPicker.styled";
import Input from '../Input/Input';
import IconPanel from '../IconPicker/IconPicker';
import { SET_STEP, EDIT_SKILL_NAME } from '../../actions/index';

function SkillPanel({ name, step, dispatch, id }) {

  const iconSet = {
    dispatchTo: "skills",
    icons: [
      "fas fa-drafting-compass",
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-react",
      "fab fa-php",
      "fas fa-database",
      "fas fa-language",
      "fas fa-laptop-code",
      "fas fa-user-check"
    ]
  }

  const steps = [1, 2, 3, 4, 5];

  const handleStepClick = (step) => {
    dispatch({type: SET_STEP, payload: [step, "skills"], id: id})
  }

  return (
    <StyledSkillPicker>
      <Input value={name} type={"text"} size={"50%"} name={"name"} label={"Umiejętność"} actionType={EDIT_SKILL_NAME} id={id}/>
      <StyledSteps step={step}>
          {steps.map( step => (<StyledStep onClick={() => handleStepClick(step)}></StyledStep>) )}
      </StyledSteps>
      <IconPanel set={iconSet} id={id}></IconPanel>
    </StyledSkillPicker>
  );
}

export default SkillPanel;
