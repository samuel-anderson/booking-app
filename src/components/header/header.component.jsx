import { HeaderContainer, NavLink } from "./header.styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutStart } from "../../features/user/userSlice";
import { useEffect } from "react";
const Header = () => {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signOutStart());
  };

  useEffect(() => {
    if (currentUser) navigate("/dashboard");
  }, [navigate, currentUser]);

  return (
    <>
      <HeaderContainer>
        <NavLink to="/">BOOK APPOINTMENT</NavLink>

        {currentUser ? (
          <NavLink as="span" onClick={signOutHandler}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink to="/signin">SIGN IN</NavLink>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
