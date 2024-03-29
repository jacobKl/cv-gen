import styled from 'styled-components';

export const StyledSkillButton = styled.button`
    background: ${props => props.theme.foreground};
    border: 1px solid ${props => props.theme.border};
    height: 40px;
    border-radius: 20px;
    display: flex;
    padding: 10px 15px;
    align-items: center;
    color: #777;
    cursor: pointer;

    margin: 4px 5px;

    p{
        padding-left: 5px;
        margin: 0;
        font-size: 18px;
    }
`;