import { styled } from "styled-components";

export const BottomSheet = styled.div`
  .bottom-sheet {
    padding: 20px;
    position: fixed;
    bottom: -100%;

    left: 0;
    right: 0;
    background-color: black;
    color: white;
    z-index: 999;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
    transition: bottom 0.5s ease-in-out;

    &.open {
      bottom: 0;
    }

    @media (min-width: 1125px) {
      display: none;
    }
  }

  .order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
  }

  .content {
    padding: 10px;
    margin-left: 30px;
  }
  .order-total {
    display: flex;
    justify-content: space-between;
  }

  .order-duration {
    font-size: 11px;
    color: gray;
  }

  .order-info {
    display: flex;
    justify-content: space-between;

    color: gray;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.24px;
    margin-left: 30px;
  }
`;
