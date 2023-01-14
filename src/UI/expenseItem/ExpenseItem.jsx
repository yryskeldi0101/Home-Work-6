import React from "react";
import styled from "styled-components";

const ElementDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  width: 748px;
  height: 104px;
  background: #4b4b4b;
  border-radius: 12px;
`;
const Data = styled.p`
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  color: #ffffff;
  box-sizing: border-box;
  width: 82.11px;
  height: 80px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  margin-left: 10px;
`;
const Title = styled.p`
  width: 162px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;
const Price = styled.p`
  color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 10px 18px;
  gap: 10px;
  width: 112px;
  height: fit-content;
  background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  margin-right: 10px;
`;
const ExpenseItem = ({ date, title, price }) => {
  return (
    <ElementDiv>
      <Data>{new Date(date).toString()}</Data>
      <Title>{title}</Title>
      <Price>$ {price}</Price>
    </ElementDiv>
  );
};

export default ExpenseItem;
