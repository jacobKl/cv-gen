import styled from "styled-components";

export const StyledThemeToggler = styled.div`
  width: 80px;
  height: 15px;
  border-radius: 7.5px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background: ${(props) => props.theme.foreground};
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;

  &:before {
    content: "${(props) => (props.mode ? "🌃" : "🌅")}";
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    width: 25px;
    height: 25px;
    position: absolute;
    border-radius: 12.5px;
    background: ${(props) => props.theme.foreground};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    top: 50%;
    left: ${(props) => (props.mode ? "0%" : "90%")};
    transform: translate(-50%, -50%);
    transition: 0.4s;
  }
`;
