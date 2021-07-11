import React, { useContext } from "react";
import { CvData } from "../../context/CvDataProvider";
import { Row, Button, StyledH1, StyledH3, SectionWrapper } from "../../GlobalStyle";
import SkillButton from "../SkillButton/SkillButton";
import SkillLevelPicker from "../SkillLevelPicker/SkillLevelPicker";
import { ADD_SKILL } from "../../actions";

function SkillsSection({ changeStep }) {
  const skills = ["CSS", "SQL", "PHP", "Język Angielski", "Język Hiszpański", "Kreatywność", "Praca w zespole", "Dowództwo", "HTML"];

  const { state, dispatch } = useContext(CvData);

  const addSkill = (skillName) => {
    dispatch({type: ADD_SKILL, payload: skillName})
  }

  return (
    <SectionWrapper>
      <StyledH1 center>Umiejętności.</StyledH1>
      <StyledH3 center>Uzupełnij informację o swoich umiejętnościach twardych i miękkich, znanych językach itd.</StyledH3>
      <Row nmargin>
        {skills.map((skill) => (
          <SkillButton skill={skill} click={addSkill} />
        ))}
      </Row>
      {state.skills.map((skill, i) => (
        <SkillLevelPicker name={skill.name} step={skill.steps} description={skill.description} dispatch={dispatch} id={i} />
      ))}
      <Row between>
        <Row start>
          <Button onClick={() => changeStep("/1")} green>
            Wróć
          </Button>
        </Row>
        <Row end>
          <Button onClick={() => changeStep("/3")} green>
            Dalej
          </Button>
        </Row>
      </Row>
    </SectionWrapper>
  );
}

export default SkillsSection;
