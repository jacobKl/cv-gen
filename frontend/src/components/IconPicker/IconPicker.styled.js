import styled from 'styled-components';

export const IconPickerWrapper = styled.div`
    border-radius: 20px;
    display: flex;
    align-items: center;
    height: 40px;

    button:nth-child(${props => props.activeIconIndex}){
        color: #000;
    }
`;