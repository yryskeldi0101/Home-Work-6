import React, { useState } from "react";
import ExpenseItem from "../../UI/expenseItem/ExpenseItem";
import ExpensesFilter from "../expensesfilter/ExpensesFilter";
import  styled from"styled-components";
import Chart from "../Chart/Chart";

const UlList = styled.ul`
padding: 10px;
border: 3px solid rgb(5, 140, 5);
border-radius: 20px;
margin-top: 20px;
margin-bottom: 30px;
background: black;  
`;
const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredItems = expenses.filter((elem) => {
    const stringifiedYear = new Date(elem.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });
  return (
      <UlList>
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart items={filteredItems}/>
        {filteredItems.map((elem) => {
          return (
            <ExpenseItem
              title={elem.title}
              date={elem.date}
              price={elem.price}
              key={elem.id + new Date().getTime}
            />
          );
        })}
      </UlList>
  );
};

export default Expenses;

