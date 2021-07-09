import styled,{ keyframes } from 'styled-components';

const jump = keyframes`
    0%{
        transform: translateY(0);
    }50%{
        transform: translateY(-10px);
    }100%{
        transform: translateY(0px);
    }
`;

export const StyledImageUploader = styled.div`
    height: 200px;
    width: 100%;
    border-radius: 15px;
    background: #eee;
    border: 4px dashed #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    i{
        font-size: 4rem;
        animation: ${props => props.fileOver ? jump : ""} 1s infinite linear;
        color: ${props => props.fileOver ? "#333" : "#ccc"};
        transition: .4s;
    }

    p{
        font-size: 20px;
        color: ${props => props.fileOver ? "#333" : "#ccc"};
        transition: .4s;
    }
`;
