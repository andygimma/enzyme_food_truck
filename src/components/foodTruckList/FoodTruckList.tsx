import { AnimatedList } from "react-animated-list";
import { FoodTruck } from "types/foodTruck";
import FoodTruckListCard from "./FoodTruckListCard";
import { Container, OrderedList, Header3, FlexContainer } from "./styles";

interface FoodTruckListProps {
  trucks: FoodTruck[];
}

const FoodTruckList = (props: FoodTruckListProps) => {
  return (
    <Container>
      <FlexContainer>
        <Header3>
          {props.trucks.length} Trucks by Distance to Union Square
        </Header3>
      </FlexContainer>
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
