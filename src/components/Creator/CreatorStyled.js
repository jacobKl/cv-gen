import styled, {css} from 'styled-components';
import { breakpoints } from '../../GlobalStyle';


export const CreatorPart = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: ${breakpoints.md}){
        width: 100%;
    }
    margin-top: 20px;
    position: relative;
`;

export const CreatorArrow = styled.button`
    position: absolute;
    top: 5%;
    left: 1%;
    transform: translate(0,-50%);
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: white;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    cursor: pointer;
    border: none;
    color: #555;
    transition: .4s;

    ${props => props.right && css`
        left: initial;
        right: 1%;
    `}

    ${props => props.step === 1 && css`
        left: initial;
        right: 1%;
    `}

    &:hover{
        box-shadow: 0 0 15px rgba(0,0,0,.2);
        transition: .4s;
        color: #45D562;
    }
`;