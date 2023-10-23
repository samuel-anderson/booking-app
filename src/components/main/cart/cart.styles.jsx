import { styled } from "styled-components";

export const CartStyles = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 410px;
  min-height: 615px;
  padding: 32px;
  border: 0.5px solid rgb(225, 225, 225);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 16px 0px;
  background-color: rgb(255, 255, 255);
  right: 40px;

  .order-text {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }

  .order-duration {
    font-size: 13px;
    color: rgba(60, 60, 67, 0.9);
  }

  .order-total {
    display: flex;
    justify-content: space-between;
  }

  .order-info {
    display: flex;
    justify-content: space-between;

    color: rgba(60, 60, 67, 0.9);
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.24px;
    margin-top: 10px;
  }

  .with {
    color: rgba(60, 60, 67, 0.6);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BtnContainer = styled.div`
  position: absolute;
  bottom: 25px;
  width: 90%;
  left: 20px;
`;
