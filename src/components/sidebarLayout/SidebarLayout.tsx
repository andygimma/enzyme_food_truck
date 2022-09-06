import FoodTruckList from "components/foodTruckList/FoodTruckList";
import FoodTruckMap from "components/foodTruckMap/FoodTruckMap";
import styled from "styled-components";
import { SMALL_DISPLAY } from "styles/global";
import { FOOD_TRUCKS } from "data/trucks";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 48px;
  @media only screen and (max-width: ${SMALL_DISPLAY}) {
    display: block;
  }
`;

const Sidebar = styled.div`
  width: 30%;
  padding-right: 24px;

  @media only screen and (max-width: ${SMALL_DISPLAY}) {
    width: 100%;
  }
`;

const MainLayout = styled.div`
  width: 70%;
  padding-left: 24px;

  @media only screen and (max-width: ${SMALL_DISPLAY}) {
    width: 100%;
  }
`;

const SidebarLayout = () => {
  return (
    <Container>
      <Sidebar>
        <FoodTruckList trucks={FOOD_TRUCKS} />
      </Sidebar>
      <MainLayout>
        <FoodTruckMap />
      </MainLayout>
    </Container>
  );
};

export default SidebarLayout;
