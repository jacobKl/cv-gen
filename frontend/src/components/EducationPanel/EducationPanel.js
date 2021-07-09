import React, { useState } from 'react'
import { EducationPanelWrapper, EducationPanelHeader, EducationPanelBody } from './EducationPanel.styled'
import { Row } from '../../GlobalStyle'
import EducationInput from '../EducationInput/EducationInput'

function EducationPopup({education, id}) {

    const [ isOpen, setIsOpen ] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    

    return (
        <EducationPanelWrapper>
            <EducationPanelHeader status={isOpen} onClick={togglePopup}>
                <p>
                    { education.name ? education.name : "Nie podano" }
                </p>
                <i className="fas fa-arrow-down"></i>
            </EducationPanelHeader>
            <EducationPanelBody status={isOpen}>
                <Row start>
                    <EducationInput id={id} value={education.name} size={"50%"} name={"name"} label="Szkoła/Firma"/>
                    <EducationInput id={id} value={education.from} size={"25%"} name={"from"} label="Od"/>
                    <EducationInput id={id} value={education.to} size={"25%"} name={"to"} label="Do"/>
                </Row>
                <Row>
                    <EducationInput id={id} value={education.position} name={"position"} label="Kierunek/Stanowisko"/>
                </Row>
            </EducationPanelBody>
        </EducationPanelWrapper>
    )
}

export default EducationPopup
