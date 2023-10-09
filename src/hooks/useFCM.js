import { requestForToken } from "../utils/firebase";

const useFCM = () => {
  // Function to navigate to a specific route
  function request() {
    requestForToken();
  }

  return { request };
};

export default useFCM;
