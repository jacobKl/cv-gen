import { useContext, useRef } from "react";
import { CvData } from "../../context/CvDataProvider";
import propTypes from "prop-types";
import { StyledInput, StyledLabel } from "./Input.styled";

function Input({ type, name, label, size, as, rows, actionType, id, value }) {
  const { state, dispatch } = useContext(CvData);
  const input = useRef();

  const handleInput = () => {
    let val = input.current.value;
    dispatch({ type: actionType, payload: val, field: name, id: id });
  };

  return (
    <StyledLabel size={size} htmlFor={name}>
      {label}
      <StyledInput rows={rows} value={value} as={as} ref={input} type={type} name={name} onChange={handleInput} />
    </StyledLabel>
  );
}

export default Input;

Input.propTypes = {
  type: propTypes.string,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  size: propTypes.string,
  as: propTypes.string,
  rows: propTypes.number,
};
