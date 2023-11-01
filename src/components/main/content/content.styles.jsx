import { styled } from "styled-components";

const mediaBreak = "1125px";

export const ContentStyles = styled.div`
  max-width: 738px;
  height: 100%;
  min-height: 615px;
  flex: 1 1 0%;
  margin-bottom: 200px;

  @media (max-width: ${mediaBreak}) {
    width: auto;
    margin-left: -12px;
  }
`;
