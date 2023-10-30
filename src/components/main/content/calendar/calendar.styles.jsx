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
  position: relative;
`;

export const Date = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgb(0, 0, 0);
  display: flex;
  border-radius: 25px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(255, 255, 255);
  margin-bottom: 2px;

  &.selected::before {
    content: "";
    position: absolute;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 1px solid rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
  }

  &.full {
    color: rgba(60, 60, 67, 0.6);
    background: repeating-linear-gradient(
      -45deg,
      rgb(230, 230, 230) 0px,
      rgb(230, 230, 230) 4px,
      rgb(202, 202, 202) 5px,
      rgb(202, 202, 202) 6px
    );
  }
`;

export const DateLabel = styled.div`
  text-align: center;
  color: rgba(60, 60, 67, 0.6);
  font-size: 12px;
  }
`;
