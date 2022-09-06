import { AnimatedList } from "react-animated-list";
import { FoodTruck } from "types/foodTruck";
import FoodTruckListCard from "./FoodTruckListCard";
import { Container, OrderedList } from "./styles";

interface FoodTruckListProps {
  trucks: FoodTruck[];
}

const FoodTruckList = (props: FoodTruckListProps) => {
  return (
    <Container>
      <OrderedList>
        <AnimatedList animation={"grow"}>
          {props.trucks.map((truck) => (
            <FoodTruckListCard key={truck.objectid} truck={truck} />
          ))}
        </AnimatedList>
      </OrderedList>
    </Container>
  );
};

export default FoodTruckList;
