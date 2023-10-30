import { styled } from "styled-components";

const mediaBreak = "1125px";

export const BtnContainer = styled.button`
  width: 100%;

  text-align: center;
  font-size: 12px;
  height: 42px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-weight: 600;

  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);

  @media (max-width: ${mediaBreak}) {
    background-color: rgb(0, 131, 255);
  }

  p {
    color: rgb(255, 255, 255);

    @media (max-width: ${mediaBreak}) {
      color: black;
    }
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 16px 24px 0px;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 12px 0px;
  }
`;
