import React, { useContext } from 'react'
import { CvData } from '../../context/CvDataProvider';
import EducationPanel from '../EducationPanel/EducationPanel';
import { EducationSectionWrapper } from './EducationSection.styled';
import { Row, Button, StyledH1, StyledH3 } from '../../GlobalStyle';
import { ADD_EDUCATION } from '../../actions/index';

function EducationSection() {

    const { state: {education}, dispatch } = useContext( CvData )

    const addPopup = () => {
        dispatch({type: ADD_EDUCATION})
    }

    return (
        <EducationSectionWrapper>
            <StyledH1 center>Twoja ściezka edukacyjna</StyledH1>
            <StyledH3 center>Uzupełnij dane o szkołach które ukończyłeś oraz umiejętnościach które posiadasz.</StyledH3>
            
            {education.map((item, i) => <EducationPanel key={i} education={item} id={i}/>)}

            <Row center>
                <Button green onClick={addPopup}>+ Add</Button>
            </Row>
        </EducationSectionWrapper>
    )
}

export default EducationSection
