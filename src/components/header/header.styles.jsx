import { styled } from "styled-components";
import { Link } from "react-router-dom";

const mediaBreak = "1125px";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 10px;

  @media (max-width: ${mediaBreak}) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const NavLink = styled(Link)`
  color: gray;
  font-size: 15px;
  cursor: pointer;
  padding-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
