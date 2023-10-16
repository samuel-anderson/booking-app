import { styled } from "styled-components";

export const BottomSheet = styled.div`
  .bottom-sheet {
    position: fixed;
    bottom: 0;
    height: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 999;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
    transition: height 0.5s ease-in-out;

    &.open {
      height: 100px;

      &.closed {
        height: auto;
      }

      &.expanded {
        height: 90%;
      }
    }
  }

  .content {
    padding: 16px;
    display: flex;
    justify-content: space-between;
  }
`;
