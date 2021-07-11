import styled from 'styled-components';

export const IconWrapper = styled.button`
    -webkit-appearance: none;
    border-radius: 50%;
    border: 1px solid #ddd;
    width: 35px;
    height: 35px;
    background: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    text-align: center;
    color: #888;

    & + &{
        margin-left: 10px;
    }
`;