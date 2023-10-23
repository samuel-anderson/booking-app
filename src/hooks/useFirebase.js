import { BARBER_SHOP_DATA } from "../data/index";
import { firebaseApi } from "../api/index";
import { useEffect } from "react";

const useFirebase = () => {
  useEffect(() => {
    firebaseApi.createDocument("barber_shop", BARBER_SHOP_DATA);
  });

  return {};
};

export default useFirebase;
