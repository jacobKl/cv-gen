import { useContext, useRef } from 'react';
import { CvData } from '../../context/CvDataProvider';
import propTypes from 'prop-types';
import { StyledInput, StyledLabel } from './PersonalInput.styled';
import { UPDATE_PERSONAL } from '../../actions'

function PersonalInput({type, name, label, size, as, rows}) {

    const { state, dispatch } = useContext( CvData )
    const input = useRef()
    // let delayTimeout

    const handleInput = () => {
        // clearInterval(delayTimeout)
        let val = input.current.value
        // delayTimeout = setTimeout(() => {
            dispatch({ type: UPDATE_PERSONAL, payload: val, field: name})
        // }, 500);
    }

    return (
        <StyledLabel size={size} htmlFor={name}>
            {label}
            <StyledInput rows={rows} value={state.personal.[name]} as={as} ref={input} type={type} name={name} onChange={handleInput} />
        </StyledLabel>
    )
}

export default PersonalInput

PersonalInput.propTypes = {
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    size: propTypes.string,
    as: propTypes.string,
    rows: propTypes.number
};