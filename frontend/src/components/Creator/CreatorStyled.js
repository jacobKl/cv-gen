import styled from "styled-components";
import { breakpoints } from "../../GlobalStyle";

export const CreatorPart = styled.div`
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.foreground};
  display: flex;
  max-height: 100vh;
  justify-content: center;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
  position: relative;
`;
