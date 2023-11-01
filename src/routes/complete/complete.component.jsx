import Finish from "../../components/main/content/finish/finish.component";
import Header from "../../components/main/content/header/header.component";
import Confirmation from "../../components/main/content/confirmation/confirmation.component";
import { useSelector } from "react-redux";

const Complete = () => {
  const isCartFinised = useSelector((state) => state.cart.isFinished);
  return (
    <>
      <Header text="Finish Booking" />
      {!isCartFinised && <Finish />}
      {isCartFinised && <Confirmation />}
    </>
  );
};

export default Complete;
