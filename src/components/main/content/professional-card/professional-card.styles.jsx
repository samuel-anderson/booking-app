import { styled } from "styled-components";

export const ProfessionalCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 166px;
  height: 230px;
  padding: 24px;
  border: 1px solid rgb(202, 202, 202);
  border-radius: 16px;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  font-weight: bold;

  img {
    width: 35%;
  }

  transition-property: border-color, background-color, box-shadow;
  transition-duration: 0.15s;

  &:hover {
    border-color: rgb(230, 230, 230);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 16px 24px 0px;
    background-color: rgb(255, 255, 255);
    transform: translateY(-3px);
  }

  &:active,
  &:focus {
    transform: translateY(1px);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 12px 0px;
  }
`;
