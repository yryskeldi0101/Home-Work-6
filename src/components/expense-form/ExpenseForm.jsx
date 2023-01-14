import React, { useState } from "react";
import Button from "../../UI/button/Button";
import FormInput from "../../UI/formInput/FormInput";
import styled from "styled-components";

const Form = styled.form`
 display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
`;
const DivContainer = styled.div`
   margin-top: 2rem;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 50px;
  margin-left: 120px;
`;
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrise] = useState("");
  const [date, setDate] = useState("");
  const enabled = title.length > 0 && price.length > 0 && date.length > 0;
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title,
      price,
      date,
    };
    props.onNewExpenseAdd(expenseDate);
    setTitle("");

    setPrise("");
    setDate("");
  };
  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    setPrise(event.target.value);
  };
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <Form>
      <FormInput
        id="name"
        labelName="Название"
        inputType="text"
        placeholder="Введите название"
        value={title}
        onChange={titleInputChangeHandler}
      />

      <FormInput
        labelName="Количество денег"
        inputType="number"
        id="money"
        value={price}
        onChange={priceInputChangeHandler}
      />

      <FormInput
        labelName="Date"
        inputType="date"
        placeholder="дд.мм.гггг"
        id="date"
        value={date}
        onChange={dateInputChangeHandler}
      />
      <DivContainer>
        <Button title="Отмена" onClick={cancelHandler} />
        <Button title="Сохранить" onClick={saveHandler} disabled={!enabled} />
      </DivContainer>
    </Form>
  );
};

export default ExpenseForm;
