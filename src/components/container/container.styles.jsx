import { styled } from "styled-components";

const mediaBreak = "1125px";

export const ContainerStyle = styled.div`
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: ${mediaBreak}) {
    & {
      padding: 0;
    }
  }
`;
