import { GlobalStyle } from "./styles/globalStyles";
import Container from "./components/container/container.component";
import { fetchShopDataStart } from "./features/shop/shopSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useFirebase from "./hooks/useFirebase";
import Footer from "./components/footer/footer.component";

function App() {
  const dispatch = useDispatch();
  useFirebase();

  useEffect(() => {
    dispatch(fetchShopDataStart());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Container />
      <Footer />
    </>
  );
}

export default App;
