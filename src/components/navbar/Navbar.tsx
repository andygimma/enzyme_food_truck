import { FormattedMessage } from "react-intl";
import "@fontsource/caveat";
import { Container, Header } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Header>
        <FormattedMessage id="app.company_name" defaultMessage={"Food Truck"} />
      </Header>
    </Container>
  );
};

export default Navbar;
