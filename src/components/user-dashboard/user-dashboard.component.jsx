import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const UserDashboard = () => {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [navigate, currentUser]);
  return <>Dashoboard!</>;
};

export default UserDashboard;
