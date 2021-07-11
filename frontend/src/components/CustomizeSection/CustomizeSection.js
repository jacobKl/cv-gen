import React from 'react'
import { Row, Button, StyledH1, StyledH3, SectionWrapper } from '../../GlobalStyle'


function CustomizeSection({changeStep}) {
    return (
        <SectionWrapper>
            <StyledH1 center>Dostosuj swoje CV</StyledH1>
            <StyledH3 center>Wybierz warianty kolorystyczne, szablon oraz czcionkę</StyledH3>
            <Row start>
                <Button onClick={() => changeStep("/2")} green>Wróć</Button>
            </Row>
        </SectionWrapper>
    )
}

export default CustomizeSection
