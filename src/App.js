import { GlobalStyle } from "./styles/globalStyles";
import Container from "./components/container/container.component";
import { fetchShopDataStart } from "./features/shop/shopSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShopDataStart());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;
