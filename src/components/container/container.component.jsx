import { Routes, Route } from "react-router-dom";

import { ContainerStyle } from "./container.styles";
import Header from "../header/header.component";
import Main from "../main/main.component";

import SignIn from "../../routes/signin/signin";
import UserDashboard from "../user-dashboard/user-dashboard.component";

const Container = () => {
  return (
    <ContainerStyle>
      <Header />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard/*" element={<UserDashboard />} />
      </Routes>
    </ContainerStyle>
  );
};

export default Container;
