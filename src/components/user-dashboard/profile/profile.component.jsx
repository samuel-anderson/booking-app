import { selectBarberWithCurrentUser } from "../../../features/professionals/professionalsSelector";
import { useSelector } from "react-redux";
const Profile = () => {
  const currentBarber = useSelector(selectBarberWithCurrentUser);
  //Registered Kari, need to go to log in
  //Email isn't saved under current user

  return (
    <>
      {currentBarber && (
        <>
          Profile: {currentBarber.name}, {currentBarber.email},{" "}
          {currentBarber.role}
        </>
      )}
    </>
  );
};
export default Profile;
