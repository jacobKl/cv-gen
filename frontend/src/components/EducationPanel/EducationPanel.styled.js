import styled, { css } from "styled-components";

export const EducationPanelWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  margin-top: 15px;
`;

export const EducationPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 16px;

  background: ${(props) => (props.status ? props.theme.background : null)};

  p {
    margin: 0;
    color: ${(props) => props.theme.font};
  }

  i {
    color: ${(props) => props.theme.font};
    transition: 0.4s;

    ${(props) =>
      props.status &&
      css`
        transform: rotate(-180deg);
        transition: 0.4s;
      `}
  }

  &:hover {
    background: ${(props) => props.theme.background};
    transition: 0.4s;
  }
`;

export const EducationPanelBody = styled.div`
  padding: 16px 32px;
  display: ${(props) => (props.status ? "block" : "none")};
`;
