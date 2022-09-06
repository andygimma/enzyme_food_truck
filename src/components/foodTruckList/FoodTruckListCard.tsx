import { FoodTruck } from "types/foodTruck";
import styled from "styled-components";

const CardListItem = styled.li`
  padding: 24px;
  width: 100%;
  border-radius: 12px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(126, 46, 132, 1) 50%,
    rgba(2, 0, 36, 1) 100%
  );
  color: white;
  opacity: 0.9;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4px;
`;

const CardFoodItems = styled.p`
  text-decoration: underline;
  font-weight: bold;
`;
interface FoodTruckListCardProps {
  truck: FoodTruck;
}

const FoodTruckListCard = (truck: FoodTruckListCardProps) => {
  return (
    <CardListItem
      onClick={() => console.log("TODO open map popup", truck.truck.objectid)}
      key={truck.truck.objectid}
    >
      <FlexContainer>
        <h2>{truck.truck.applicant}</h2>
      </FlexContainer>
      <FlexContainer>
        <CardFoodItems>{truck.truck.fooditems}</CardFoodItems>
      </FlexContainer>
      <FlexContainer>
        <p>Location: {truck.truck.address}</p>
      </FlexContainer>
    </CardListItem>
  );
};

export default FoodTruckListCard;
