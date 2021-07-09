import React, { useContext } from 'react'
import { CvData } from '../../context/CvDataProvider';
import EducationPanel from '../EducationPanel/EducationPanel';
import { Row, Button, StyledH1, StyledH3, SectionWrapper } from '../../GlobalStyle';
import { ADD_EDUCATION } from '../../actions/index';

function EducationSection({changeStep}) {

    const { state: {education}, dispatch } = useContext( CvData )

    const addPopup = () => {
        dispatch({type: ADD_EDUCATION})
    }

    return (
        <SectionWrapper>
            <StyledH1 center>Edukacja / doświadczenie zawodowe</StyledH1>
            <StyledH3 center>Uzupełnij dane o szkołach które ukończyłeś oraz miejscach pracy.</StyledH3>
            
            {education.map((item, i) => <EducationPanel key={i} education={item} id={i}/>)}

            <Row center>
                <Button green onClick={addPopup}>+ Add</Button>
            </Row>
            <Row between>
                <Row start>
                    <Button onClick={() => changeStep("/")} green>Wróć</Button>
                </Row>
                <Row end>
                    <Button onClick={() => changeStep("/2")} green>Dalej</Button>
                </Row>
            </Row>
        </SectionWrapper>
    )
}

export default EducationSection
