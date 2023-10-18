import { styled } from "styled-components";

export const IconBtnStyles = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(255, 255, 255);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;

  position: absolute;
  top: -12px;
  right: -12px;

  .icon {
    width: 24px;
    height: 20px;
    color: black;
  }
`;

export const ServiceCardStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 166px;
  min-height: 124px;
  cursor: pointer;
  padding: 20px 16px;

  border: 1px solid rgb(202, 202, 202);
  border-radius: 16px;

  font-size: 16px;

  transition-property: border-color, background-color, box-shadow;
  transition-duration: 0.15s;

  &.isSelected {
    background-color: black;
  }

  &.isAddOn {
    background-color: rgb(224, 224, 224);
  }

  .title {
    margin: 0px;
    font-size: 15px;
    font-weight: 600;
    line-height: 16px;

    &.isSelected {
      color: white;
    }

    &.notSelected {
      color: rgb(0, 0, 0);
    }
  }

  .duration {
    margin: 0px;
    font-size: 13px;
    font-weight: normal;
    line-height: 15px;
    letter-spacing: -0.08px;

    &.isSelected {
      color: white;
    }

    &.notSelected {
      color: rgba(60, 60, 67, 0.6);
    }
  }

  .price {
    position: absolute;
    right: 0px;
    bottom: 16px;
    padding: 4px 12px;
    border-radius: 8px 0px 0px 8px;
    margin: 0px;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;

    &.isSelected {
      color: white;
      background: rgb(53, 53, 53);
    }

    &.notSelected {
      color: rgb(0, 0, 0);
      background: rgb(238, 238, 238);
    }
  }

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
  }
`;
