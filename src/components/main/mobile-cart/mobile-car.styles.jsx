import { styled } from "styled-components";

export const BottomSheet = styled.div`
  .bottom-sheet {
    position: fixed;
    bottom: -100%;
    left: 0;
    right: 0;
    background-color: white;

    transition: bottom 0.3s ease-in-out, height 0.3s ease-in-out;

    z-index: 999;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
    padding: 20px;

    border-top-left-radius: 5%;
    border-top-right-radius: 5%;

    &.open {
      bottom: 0;
      height: 100px;

      &.grow {
        height: 200px;
      }
    }
  }

  .content {
    padding: 16px;
  }
`;
