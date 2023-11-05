import { HeaderContainer, NavLink } from "./header.styles";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <NavLink to="/">BOOK APPOINTMENT</NavLink>
        <NavLink to="/signin">BARBER SIGN IN</NavLink>
      </HeaderContainer>
    </>
  );
};

export default Header;
