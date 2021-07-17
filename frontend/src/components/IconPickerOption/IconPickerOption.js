import React from "react";
import { IconWrapper } from "./IconPickerOption.styled";

function IconButton({ icon, click, index }) {
  return (
    <IconWrapper onClick={() => click(index)}>
      <i className={icon}></i>
    </IconWrapper>
  );
}

export default IconButton;
