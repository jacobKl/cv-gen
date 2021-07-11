import React, { useState } from 'react'
import { EducationPanelWrapper, EducationPanelHeader, EducationPanelBody } from './EducationPanel.styled'
import { Row } from '../../GlobalStyle'
import Input from '../Input/Input'
import IconPanel from '../IconPicker/IconPicker';
import { EDIT_EDUCATION } from '../../actions/index';


function EducationPopup({education, id}) {

    const iconsSet = {
        dispatchTo: "education",
        icons: [
            "fas fa-university",
            "fas fa-user-graduate",
            "fas fa-graduation-cap",
            "fas fa-briefcase",
            "fas fa-lightbulb",
            "fas fa-code"
        ]
    }

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
                <IconPanel set={iconsSet} id={id}></IconPanel>
                <Row start>
                    <Input id={id} value={education.name} type={"text"} size={"50%"} name={"name"} label="Szkoła/Firma" actionType={EDIT_EDUCATION}/>
                    <Input id={id} value={education.from} type={"text"} size={"25%"} name={"from"} label="Od" actionType={EDIT_EDUCATION}/>
                    <Input id={id} value={education.to} type={"text"} size={"25%"} name={"to"} label="Do" actionType={EDIT_EDUCATION}/>
                </Row>
                <Row>
                    <Input id={id} value={education.position} type={"text"} name={"position"} label="Kierunek/Stanowisko" actionType={EDIT_EDUCATION}/>
                </Row>
            </EducationPanelBody>
        </EducationPanelWrapper>
    )
}

export default EducationPopup
