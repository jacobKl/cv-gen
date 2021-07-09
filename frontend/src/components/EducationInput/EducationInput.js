import React, { useContext, useRef } from 'react'
import { CvData } from '../../context/CvDataProvider';
import { StyledInput, StyledLabel } from '../PersonalInput/PersonalInput.styled';
import { EDIT_EDUCATION } from '../../actions/index';


function EducationInput({ name, label, size, value, id}) {

    const { dispatch } = useContext( CvData )
    const input = useRef()

    const handleInput = () => {
        let val = input.current.value
        dispatch({ type: EDIT_EDUCATION, payload: val, field: name, id: id})
    }

    return (
        <StyledLabel size={size} htmlFor={name}>
            {label}
            <StyledInput ref={input} value={value} type="text" name={name} onInput={handleInput} />
        </StyledLabel>
    )
}

export default EducationInput
