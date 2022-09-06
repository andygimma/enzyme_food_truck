import FoodTruckList from "components/foodTruckList/FoodTruckList";
import FoodTruckMap from "components/foodTruckMap/FoodTruckMap";
import styled from "styled-components";
import { SMALL_DISPLAY } from "styles/global";

const Container = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: ${SMALL_DISPLAY}) {
    display: block;
  }
`;

const Sidebar = styled.div`
  background-color: blue;
  width: 30%;

  @media only screen and (max-width: ${SMALL_DISPLAY}) {
    width: 100%;
  }
`;

const MainLayout = styled.div`
  width: 70%;

  @media only screen and (max-width: ${SMALL_DISPLAY}) {
    width: 100%;
  }
`;

const SidebarLayout = () => {
  return (
    <Container>
      <Sidebar>
        <FoodTruckList names={["first", "second", "third"]} />
      </Sidebar>
      <MainLayout>
        <FoodTruckMap />
      </MainLayout>
    </Container>
  );
};

export default SidebarLayout;
