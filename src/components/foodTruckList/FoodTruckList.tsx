import styled from "styled-components";
import { FoodTruck } from "types/foodTruck";
import FoodTruckListCard from "./FoodTruckListCard";

const Container = styled.div`
  width: 100%;
`;

const OrderedList = styled.ol`
  width: 100%;
  list-style-type: none;
  li:not(:last-child) {
    margin-bottom: 8px;
  }
`;

interface FoodTruckListProps {
  trucks: FoodTruck[];
}

const FoodTruckList = (props: FoodTruckListProps) => {
  return (
    <Container>
      <OrderedList>
        {props.trucks.map((truck) => (
          <FoodTruckListCard key={truck.objectid} truck={truck} />
        ))}
      </OrderedList>
    </Container>
  );
};

export default FoodTruckList;
