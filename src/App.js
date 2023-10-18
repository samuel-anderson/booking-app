import { GlobalStyle } from "./styles/globalStyles";
import Container from "./components/container/container.component";
import { fetchProfessionalsStart } from "./features/professionals/professionalsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendSMS } from "./utils/firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfessionalsStart());
    sendSMS();
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;
