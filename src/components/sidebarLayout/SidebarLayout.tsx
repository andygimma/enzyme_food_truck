import FoodTruckList from "components/foodTruckList/FoodTruckList";
import FoodTruckMap from "components/foodTruckMap/FoodTruckMap";
import { Container, Sidebar, MainLayout } from "./styles";
import { FOOD_TRUCKS } from "data/trucks";

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
