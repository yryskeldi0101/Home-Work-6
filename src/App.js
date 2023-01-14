import { useState } from "react";
import styled from "styled-components";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expenses/NewExpense";

const items = [
  {
    id: 1,
    title: 'Fruits',
    price: 300,
    date: new Date(2021, 0, 28)
  },
  {
    id: 2,
    title: 'Food',
    price: 400,
    date: new Date(2021, 1, 12)
  },
  {
    id: 3,
    title: 'Tea',
    price: 400,
    date: new Date(2022, 2, 12)
  },{
    id: 4,
    title: 'New Desk',
    price: 850,
    date: new Date(2022, 3, 28)
  },
  {
    id: 5,
    title: 'Milk',
    price: 450,
    date: new Date(2019, 4, 17)
  },
  {
    id: 6,
    title: 'Air Pods',
    price: 500,
    date: new Date(2022, 4, 28)
  },
  {
    id: 7,
    title: 'Water',
    price: 650,
    date: new Date(2019, 5, 28)
  },
  {
    id: 8,
    title: 'Books',
    price: 800,
    date: new Date(2020, 6, 28)
  },
  {
    id: 9,
    title: 'Laptop',
    price: 350,
    date: new Date(2019, 7, 28)
  },
   {
    id: 10,
    title: 'Apple',
    price: 700,
    date: new Date(2020, 8, 18)
  },
  {
    id:11,
    title: "Orange",
    price: 600,
    date: new Date(2023, 9, 18)
  },
  {
    id:12,
    title: 'Pear',
    price: 500,
    date: new Date(2023, 10, 14)
  },{
    id:13,
    title: 'Grape',
    price: 500,
    date: new Date(2019, 11, 28)
  },{
    id:14,
    title: 'Kiwi',
    price: 700,
    date: new Date(2020, 6, 20)
  },{
    id:15,
    title: 'Banana',
    price: 1000,
    date: new Date(2021, 4, 18)
  },
];

const AppDiv = styled.div`
display: flex;
justify-content: center;
background: #1F1F1F;
border-radius: 12px;
`;
const ItemDiv = styled.div`
text-align: center;
width: 780px;
`;

function App() {
  const [expenses , setExpenses] = useState(items)
   const addNewExpenseHandler = (data) => {
   const upExpenses = [...expenses];
   upExpenses.push(data)
   setExpenses(upExpenses)
   }

  return <AppDiv> 
    <ItemDiv>
    <NewExpense onNewExpenseAdd={addNewExpenseHandler}/>
    <Expenses expenses={expenses}/>
    </ItemDiv>
  </AppDiv>
}

export default App;
