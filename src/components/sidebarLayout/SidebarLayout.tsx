import FoodTruckList from "components/foodTruckList/FoodTruckList";
import FoodTruckMap from "components/foodTruckMap/FoodTruckMap";
import { Container, Sidebar, MainLayout } from "./styles";
import { useQuery } from "react-query";
import { FOOD_TRUCK_API } from "queries/urls";
import { filterByOpenTrucks } from "queries/transformations";

const SidebarLayout = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(FOOD_TRUCK_API).then((res) => res.json())
  );

  if (isLoading) return <div>"Loading..."</div>;

  if (error) return <div>"An error has occurred..."</div>;

  const approvedTrucks = filterByOpenTrucks(data);
  return (
    <Container>
      <Sidebar>
        <FoodTruckList trucks={approvedTrucks} />
      </Sidebar>
      <MainLayout>
        <FoodTruckMap trucks={approvedTrucks} />
      </MainLayout>
    </Container>
  );
};

export default SidebarLayout;
