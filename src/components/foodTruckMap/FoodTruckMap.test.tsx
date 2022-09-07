import renderer from "react-test-renderer";
import FoodTruckMap from "./FoodTruckMap";

// NOTE I use snapshots sparingly. Generally only for a component that is unlikely to be changed on purpose.
// An example could be our map container

import { FOOD_TRUCKS } from "data/trucks";

it("renders correctly", () => {
  const tree = renderer.create(<FoodTruckMap trucks={FOOD_TRUCKS} />).toJSON();
  expect(tree).toMatchSnapshot();
});
