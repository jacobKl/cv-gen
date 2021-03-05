import styled,{css} from 'styled-components';

export const EducationPanelWrapper = styled.div`
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 15px;

`;

export const EducationPanelHeader = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 16px;

    background: ${props => props.status ? "#f4f4f4" : null};


    p {
        margin: 0;
        color: #555;
    }

    i{
        color: #555;
        transition: .4s;

        ${props => props.status && css`
            transform: rotate(-180deg);
            transition: .4s;
        `}
    }

    &:hover{
        background: #f4f4f4;
        transition: .4s;
    }

`;

export const EducationPanelBody = styled.div`
    padding: 16px 32px;
    display: ${props => props.status ? "block" : "none"};
`;