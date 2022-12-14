import { CENTROID } from "data/map";
import { orderByDistance } from "queries/transformations";
import { AnimatedList } from "react-animated-list";
import { FormattedMessage } from "react-intl";
import { FoodTruck } from "types/foodTruck";
import FoodTruckListCard from "./FoodTruckListCard";
import { Container, OrderedList, Header3, FlexContainer } from "./styles";

interface FoodTruckListProps {
  trucks: FoodTruck[];
}

const FoodTruckList = (props: FoodTruckListProps) => {
  const trucksOrderedByDistance: FoodTruck[] = orderByDistance(
    CENTROID,
    props.trucks
  );
  return (
    <Container>
      <FlexContainer>
        <Header3>
          {props.trucks.length}:{" "}
          <FormattedMessage
            id="app.list_header"
            defaultMessage={"Trucks by Distance to Union Square"}
          />
        </Header3>
      </FlexContainer>
      <OrderedList>
        <AnimatedList animation={"grow"}>
          {trucksOrderedByDistance.map((truck) => (
            <FoodTruckListCard key={truck.objectid} truck={truck} />
          ))}
        </AnimatedList>
      </OrderedList>
    </Container>
  );
};

export default FoodTruckList;
