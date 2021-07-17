import styled from "styled-components";

export const IconWrapper = styled.button`
  -webkit-appearance: none;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.border};
  width: 35px;
  height: 35px;
  background: ${(props) => props.theme.foreground};
  cursor: pointer;
  font-size: 1.2rem;
  text-align: center;
  color: #888;

  & + & {
    margin-left: 10px;
  }
`;
