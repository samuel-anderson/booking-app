import { HeaderContainer, NavLink } from "./header.styles";
import { useSelector, useDispatch } from "react-redux";
import { signOutStart } from "../../features/user/userSlice";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signOutStart());
  };

  return (
    <>
      <HeaderContainer>
        <NavLink to="/">BOOK APPOINTMENT</NavLink>

        {currentUser ? (
          <>
            <NavLink to="/dashboard">DASHBOARD</NavLink>
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          </>
        ) : (
          <NavLink to="/signin">BARBER ACCESS</NavLink>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
