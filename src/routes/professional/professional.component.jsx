import ProfessionalList from "../../components/main/content/professional-list/professional-list.component";
// import GenericCard from "../../components/main/content/generic-card/generic-card.component";
import { Container } from "./professional.styles";
import Header from "../../components/main/content/header/header.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../features/cart/cartSlice";

const Professional = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
  });
  return (
    <div>
      <Header text="Choose Professional" />
      <Container>
        {/* <GenericCard title="Choose a service first" /> */}
        <ProfessionalList />
      </Container>
    </div>
  );
};

export default Professional;
