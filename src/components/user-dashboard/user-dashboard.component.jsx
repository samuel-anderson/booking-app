import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Profile from "./profile/profile.component";
import Appointment from "./appointment/appointement.component";
import Report from "./report/report.component";

const DASHBOARD_TABS = ["Profile", "Appointment", "Report"];

const UserDashboard = () => {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const dashboard = () => {
    switch (DASHBOARD_TABS[value]) {
      case "Profile":
        return <Profile />;
      case "Appointment":
        return <Appointment />;
      case "Report":
        return <Report />;
      default:
        return <div>No matching component</div>;
    }
  };

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [navigate, currentUser]);
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          {DASHBOARD_TABS.map((tab, idx) => {
            return <Tab label={tab} key={idx} />;
          })}
        </Tabs>
      </Box>
      {dashboard()}
    </>
  );
};

export default UserDashboard;
