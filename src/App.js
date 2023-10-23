import { GlobalStyle } from "./styles/globalStyles";
import Container from "./components/container/container.component";
import { fetchShopDataStart } from "./features/shop/shopSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// import { BARBER_SHOP_DATA } from "./data/index";
// import { createDocument } from "./api/firebase/firebaseApi";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShopDataStart());

    // createDocument("barber_shop", BARBER_SHOP_DATA);
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;
