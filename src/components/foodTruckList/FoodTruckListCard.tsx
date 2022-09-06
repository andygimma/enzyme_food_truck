import { FoodTruck } from "types/foodTruck";
import { CardFoodItems, FlexContainer, Header2, CardListItem } from "./styles";
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
        <Header2>{truck.truck.applicant}</Header2>
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
