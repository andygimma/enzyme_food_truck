import { FoodTruck } from "types/foodTruck";

export const filterByOpenTrucks = (trucks: FoodTruck[]) => {
  return trucks.filter((truck) => {
    return truck.status?.toLowerCase() === "approved" ? true : false;
  });
};
