import styled from "styled-components";

const FilterDiv = styled.div`
  color: white;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 1rem;
`;
const ControlDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Select = styled.select`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  text-align: center;
`;
const ExpensesFilter = ({ value, onChange }) => {
  return (
    <FilterDiv>
      <ControlDiv>
        <label>Filter by year</label>
        <Select value={value} onChange={onChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </Select>
      </ControlDiv>
    </FilterDiv>
  );
};

export default ExpensesFilter;
