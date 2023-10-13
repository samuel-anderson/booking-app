import { styled } from "styled-components";

export const ContainerStyle = styled.div`
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: 768px) {
    & {
      padding: 0;
    }
  }
`;
