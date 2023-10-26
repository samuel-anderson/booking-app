import { styled } from "styled-components";

export const TimeSlotStyles = styled.button`
  height: 42px;
  width: 128px;
  padding: 0px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 12px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  border: 1px solid rgb(202, 202, 202);
  font-weight: bold;

  &.notSelected:hover {
    border-color: rgb(230, 230, 230);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 16px 24px 0px;
    background-color: rgb(255, 255, 255);
    transform: translateY(-3px);
  }

  &.notSelected:active,
  &.notSelected:focus {
    transform: translateY(1px);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 12px 0px;
    background-color: rgb(0, 0, 0);
    border-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
`;
