import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  margin-left: 230px;
  padding: 15px 30px;
  width: 228px;
  height: 51px;
  background: #4a026b;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff; 
`
const Button = (props) => {
  return <StyledButton  onClick={props.onClick}disabled={props.disabled}>{props.title}</StyledButton>;
};

export default Button;
