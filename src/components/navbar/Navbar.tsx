import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  background-color: #008dd5;
  height: 60px;
`;

const Header = styled.h1`
  font-size: 24px;
`;

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
