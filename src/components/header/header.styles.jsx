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

export const DropDown = styled.div`
  position: relative;
`;

export const DropDownMenu = styled.div`
  position: absolute;
  z-index: 100;
  width: 200px;
  display: flex;
  flex-direction: column;
`;
