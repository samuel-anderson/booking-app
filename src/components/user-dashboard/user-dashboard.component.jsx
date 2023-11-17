import { useNavigate, NavLink, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Professional from "./professionals/professionals.component.jsx";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Appointments from "./appointments/appointements.component.jsx";

const dashboardNavigation = [
  { text: "Professioanl", route: "/dashboard" },
  { text: "Appointment", route: "/dashboard/appointments" },
];
const drawerWidth = 240;

const UserDashboard = () => {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [navigate, currentUser]);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            {dashboardNavigation.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <NavLink to={item.route}>
                    <ListItemText primary={item.text} />
                  </NavLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Routes>
          <Route path="/" element={<Professional />} />
          <Route path="appointments" element={<Appointments />} />
          {/*  <Route path="availability" element={<Availability />} />
        <Route path="finish" element={<Complete />} /> */}
        </Routes>
      </Box>
    </>
  );
};

export default UserDashboard;
