import styled from 'styled-components';

export const StyledSkillPicker = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 18px;
    padding: 10px 20px;
    margin-top: 10px;
    flex-wrap: wrap;
`;

export const StyledSteps = styled.div`
    display: flex;
    width: 50%;
    height: 30px;
    align-items: center;
    justify-content: space-between;
    max-width: 150px;

    button:nth-child(-n + ${props => props.step}){
        background: #45D562;
        color: #444;
        border-color: #444;
        transition: .4s;
    }
`;

export const StyledStep = styled.button`
    border: 1px solid #ddd;
    background: #eee;
    cursor: pointer;
    font-size: 1rem;
    color: #ddd;
    font-weight: bold;
    transition: .4s;
    height: 25px;
    width: 25px;
    border-radius: 50%;

    span{
        margin: 0 5px;
    }
`;