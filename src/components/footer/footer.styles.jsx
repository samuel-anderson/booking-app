import { styled } from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(247, 247, 247);

  align-items: center;

  height: 40px;
  z-index: 100;

  padding-left: 80px;
  padding-right: 80px;

  /* Use a media query to hide the footer on mobile devices */
  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;
