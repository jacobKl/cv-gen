import React, { useContext } from 'react'
import { CvData } from '../../context/CvDataProvider';
import Input from '../Input/Input'
import { Row, Button, StyledH1, StyledH3, SectionWrapper } from '../../GlobalStyle'
import ImageUploader from '../ImageUploader/ImageUploader';
import { EDIT_PERSONAL } from '../../actions/index';


function PersonalSection({changeStep}) {

    const { state } = useContext(CvData);

    return (
        <SectionWrapper>
            <StyledH1 center>Dane podstawowe</StyledH1>
            <StyledH3 center>Wypełnij wszystkie pola które chcesz i przejdź dalej!</StyledH3>
            <Row>
                <Input value={state.personal.name} size={"50%"} name="name" type="text" label="Imię" actionType={EDIT_PERSONAL}/>
                <Input value={state.personal.surname} size={"50%"} name="surname" type="text" label="Nazwisko" actionType={EDIT_PERSONAL}/>
            </Row>
            <Row>
                <Input value={state.personal.email} size={"50%"} name="email" type="email" label="Email" actionType={EDIT_PERSONAL}/>
                <Input value={state.personal.phone} size={"50%"} name="phone" type="tel" label="Numer telefonu" actionType={EDIT_PERSONAL}/>
            </Row>
            <Row>
                <Input value={state.personal.address} size={"75%"} name="address" type="text" label="Adres" actionType={EDIT_PERSONAL}/>
                <Input value={state.personal.postcode} size={"25%"} name="postcode" type="text" label="Kod pocztowy" actionType={EDIT_PERSONAL}/>
            </Row>
            <div>
                <Input value={state.personal.resume} rows={4} as="textarea" name="resume" label="O tobie" noresize actionType={EDIT_PERSONAL}></Input>
            </div>
            <Row end>
                <Button onClick={() => changeStep("/1")} green>Dalej</Button>
            </Row>
            <StyledH3 center>Wstaw swoje zdjęcie</StyledH3>
            <ImageUploader></ImageUploader>
        </SectionWrapper>
    )
}

export default PersonalSection
