import { GlobalStyle } from "./styles/globalStyles";
import Container from "./components/container/container.component";
import { fetchProfessionalsStart } from "./features/professionals/professionalsSlice";
import { fetchServicesStart } from "./features/services/servicesSlice";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfessionalsStart());
    dispatch(fetchServicesStart());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;
