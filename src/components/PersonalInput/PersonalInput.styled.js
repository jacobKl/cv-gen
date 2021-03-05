import styled from 'styled-components';
import { breakpoints } from '../../GlobalStyle';

export const StyledInput = styled.input`
    border: 0;
    background: #f4f4f4;
    border-radius: 5px;
    width: 100%;
    font-size: .9rem;
    padding: 15px;
    position: relative;
    color: #555;
    resize: none;

    &:focus {
        outline: 0;
    }

`;

export const StyledLabel = styled.label`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #555;
    margin: 5px 0;
    width: ${props => props.size || "100%"};
    & + label {
        padding-left: 10px;
    }

    @media (max-width: ${breakpoints.xs}){
        width: 100%;
        & + label {
            padding-left: 0;
        }
    }
`;