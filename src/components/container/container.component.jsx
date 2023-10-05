import { ContainerStyle } from "./container.styles";
import Header from "../header/header.component";
import Main from "../main/main.component";
import Footer from "../footer/footer.component";

const Container = () => {
  return (
    <ContainerStyle>
      <Header />
      <Main />
      <Footer />
    </ContainerStyle>
  );
};

export default Container;
