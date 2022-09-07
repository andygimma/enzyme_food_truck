import { filterByOpenTrucks } from "./transformations";
import { FOOD_TRUCKS } from "data/trucks";

describe("transformations", () => {
  it("filters by open food trucks", () => {
    const EXPECTED_TOTAL = 2;
    const filtered = filterByOpenTrucks(FOOD_TRUCKS);
    expect(filtered.length).toEqual(EXPECTED_TOTAL);
    expect(filtered[0].status?.toLowerCase()).toBe("approved");
    expect(filtered[1].status?.toLowerCase()).toBe("approved");
  });
});
