import React from "react";
import ChartBar from "./ChartBar";
import styled from "styled-components"

const Container = styled.div`
  margin-top: 90px;
    padding: 1rem;
    border-radius: 12px;
    background-color: #c75be5;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
`
const Chart = ({items}) => {
  const maximumPrice = 2000;
  const month = [
    {
      label: "Jenuary",
      currentPrice: 0,
    },
    {
      label: "February",
      currentPrice: 0,
    },
    {
      label: "March",
      currentPrice: 0,
    },
    {
      label: "April",
      currentPrice: 0,
    },
    {
      label: "May",
      currentPrice: 0,
    },
    {
      label: "Jun",
      currentPrice: 0,
    },
    {
      label: "Julay",
      currentPrice: 0,
    },
    {
      label: "Augest",
      currentPrice: 0,
    },
    {
      label: "September",
      currentPrice: 0,
    },
    {
      label: "October",
      currentPrice: 0,
    },
    {
      label: "November",
      currentPrice: 0,
    },
    {
      label: "December",
      currentPrice: 0,
    },
  ];
   items.forEach((item) => {
    const mothNumber = new Date(item.date).getMonth();
    month[mothNumber].currentPrice += item.price
  });
  return (
    <Container>
      {month.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            currentPrice={item.currentPrice}
            maximumPrice={maximumPrice}
          />
        );
      })}
    </Container>
  );
};

export default Chart;
