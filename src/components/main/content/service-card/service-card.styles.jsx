import { styled } from "styled-components";

export const ServiceCardStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 166px;
  min-height: 124px;

  padding: 20px 16px;

  border: 1px solid rgb(202, 202, 202);
  border-radius: 16px;
  cursor: pointer;
  font-size: 16px;

  transition-property: border-color, background-color, box-shadow;
  transition-duration: 0.15s;

  .title {
    margin: 0px;
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    font-family: "SF Pro Display";
  }

  .duration {
    margin: 0px;
    color: rgba(60, 60, 67, 0.6);
    font-family: "SF Pro Text";
    font-size: 11px;
    font-weight: normal;
    line-height: 15px;
    letter-spacing: -0.08px;
  }

  .price {
    position: absolute;
    right: 0px;
    bottom: 16px;
    padding: 4px 12px;
    color: rgb(0, 0, 0);
    background: rgb(238, 238, 238);
    border-radius: 8px 0px 0px 8px;

    margin: 0px;
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    font-family: "SF Pro Display";
  }

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
