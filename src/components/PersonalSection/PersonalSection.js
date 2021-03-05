import React from 'react'
import { PersonalWrapper } from './PersonalSection.styled'
import PersonalInput from '../PersonalInput/PersonalInput'
import { Row, Button, StyledH1, StyledH3 } from '../../GlobalStyle'


function PersonalSection({prev,next}) {


    return (
        <PersonalWrapper>
            <StyledH1 center>Dane podstawowe</StyledH1>
            <StyledH3 center>Wypełnij wszystkie pola które chcesz i przejdź dalej!</StyledH3>
            <Row>
                <PersonalInput size={"50%"} name="name" type="text" label="Imię" />
                <PersonalInput size={"50%"} name="surname" type="text" label="Nazwisko" />
            </Row>
            <Row>
                <PersonalInput size={"50%"} name="email" type="email" label="Email" />
                <PersonalInput size={"50%"} name="phone" type="tel" label="Numer telefonu" />
            </Row>
            <Row>
                <PersonalInput size={"75%"} name="address" type="text" label="Adres" />
                <PersonalInput size={"25%"} name="postcode" type="text" label="Kod pocztowy" />
            </Row>
            <div>
                <PersonalInput rows={"5"} as="textarea" name="resume" label="O tobie" noresize></PersonalInput>
            </div>
            <Row end>
                <Button onClick={() => next(1)} green>Dalej</Button>
            </Row>
        </PersonalWrapper>
    )
}

export default PersonalSection
