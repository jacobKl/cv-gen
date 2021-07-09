import styled,{ createGlobalStyle, css } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    body{
        padding: 0; 
        margin: 0;
    }
    *{
        box-sizing: border-box;
        font-family: Roboto;
    }
`
export default GlobalStyle;

export const breakpoints = {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200"
}

export const themes = {
    light: {
        
    }
}

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0;

    ${props => props.between && css`
        justify-content: space-between;
    `};

    ${props => props.start && css`
        justify-content: flex-start;
    `};

    ${props => props.end && css`
        justify-content: flex-end;
    `};

    ${props => props.center && css`
        justify-content: center;
    `};
`

export const Button = styled.button`
    padding: 10px 16px;
    font-size: .9rem;
    border-radius: 5px;
    border: 0;
    cursor: pointer;

    ${props => props.green && css`
        color: white;
        background: #45D562;
    `}

    ${props => props.light && css`
        color: #555;
        background: #f4f4f4;
    `}
`

export const StyledH1 = styled.h1`
    font-size: 3rem;
    color: #555;
    line-height: 1.1;
    margin: 0;

    ${props => props.center && css`
        text-align: center;
    `}
`;

export const StyledH3 = styled.h3`
    font-size: 1.5rem;
    color: #888;
    line-height: 1.1;
    
    ${props => props.center && css`
        text-align: center;
    `}
`;


export const SectionWrapper = styled.div`
    width: 90%;
    padding: 20px 60px;

    @media (max-width: ${breakpoints.sm}){
        padding: 20px;
    }
`;