import { GlobalStyle } from "./styles/globalStyles";
import Container from "./components/container/container.component";
import { fetchProfessionalsStart } from "./features/professionals/professionalsSlice";
import { fetchServicesStart } from "./features/services/servicesSlice";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { firebaseApi } from "./api/index";
// import { services } from "./data/service";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfessionalsStart());
    dispatch(fetchServicesStart());

    // const create = async () => {
    //   await firebaseApi.createDocument("services", services);
    // };

    // create();
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;
