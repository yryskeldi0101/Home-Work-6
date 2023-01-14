import React, { useState } from "react";
import Button from "../../UI/button/Button";
import ExpenseForm from "../expense-form/ExpenseForm";
import styled from  "styled-components"


const StyledDiv = styled.div`
  background: #AD9BE9;
border-radius: 12px;
padding: 50px;
`
const NewExpense = ({onNewExpenseAdd}) => {
  const [showForm, setShowForm] = useState(false);
  const showExpenseForm = () => {
    setShowForm((prevState) => {
    return ! prevState
    });
  };
  return (
    <StyledDiv>
      {showForm ? (
        <ExpenseForm onShowForm={showExpenseForm} 
        onNewExpenseAdd={onNewExpenseAdd}/>
      ) : (
        <Button 
        title="Добавить новый расход"
        onClick={showExpenseForm} />
      )}
    </StyledDiv>
  );
};

export default NewExpense;
