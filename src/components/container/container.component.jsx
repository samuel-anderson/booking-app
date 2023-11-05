import { Routes, Route } from "react-router-dom";

import { ContainerStyle } from "./container.styles";
import Header from "../header/header.component";
import Main from "../main/main.component";

import SignIn from "../../routes/signin/signin";

const Container = () => {
  return (
    <ContainerStyle>
      <Header />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </ContainerStyle>
  );
};

export default Container;
