import styled,{ createGlobalStyle, css } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    body{
        padding: 0; 
        margin: 0;
    }
    *{
        box-sizing: border-box;
        font-family: Roboto;
        transition: .4s;
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
        font: "#555",
        fontLight: "#888",
        highlight: "#45D562",
        foreground: "#fff",
        background: "#f4f4f4",
        thirdary: "#eee",
        border: "#ddd"
    },
    dark: {
        font: "#eee",
        fontLight: "#aaa",
        highlight: "#45D562",
        foreground: "#333",
        background: "#121212",
        thirdary: "#444",
        border: "#111"
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

    ${props => props.nmargin && css`
        margin: 0 -5px;
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
        color: ${props => props.theme.font};
        background: ${props => props.theme.background};
    `}
`

export const StyledH1 = styled.h1`
    font-size: 3rem;
    color: ${props => props.theme.font};
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
    padding: 20px 40px;
    width: 100%;
    max-height: 100vh;
    height: 100%;
    overflow-y: auto;
`;