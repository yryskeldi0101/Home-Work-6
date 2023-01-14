import React from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10px;
`;
const LabelName = styled.label`
  font-weight: 500;
  display: flex;
  margin-bottom: 10px;
`;
const Input = styled.input`
  outline: none;
  width: 290px;
  height: 40px;
  border-radius: 10px;
  border: none;
`;
const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  return (
    <InputDiv>
      <LabelName htmlFor={id}>{labelName}</LabelName>
      <Input
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}
      />
    </InputDiv>
  );
};

export default FormInput;
