import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 10px;
`;

export const Date = styled.div`
  width: 25px;
  background-color: gray;
  display: flex;
  border-radius: 25px;
  padding: 2px;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;
