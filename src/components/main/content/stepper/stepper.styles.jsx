import { styled } from "styled-components";

export const Label = styled.span`
  &.activeLabel:hover {
    cursor: pointer;
  }
  &.unActiveLabel:hover {
    cursor: not-allowed;
  }
`;
