import { GlobalStyle } from "./styles/globalStyles";
import Container from "./components/container/container.component";
import { fetchProfessionalsStart } from "./features/professionals/professionalsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { requestForToken } from "./utils/firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfessionalsStart());
    requestForToken();
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;
