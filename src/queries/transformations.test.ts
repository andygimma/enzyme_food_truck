import { filterByOpenTrucks, findClosestLocation } from "./transformations";
import { FOOD_TRUCKS, LOCATION_TEST_1, LOCATION_TEST_2 } from "data/trucks";

describe("filterByOpenTrucks", () => {
  it("filters by open food trucks", () => {
    const EXPECTED_TOTAL = 2;
    const filtered = filterByOpenTrucks(FOOD_TRUCKS);
    expect(filtered.length).toEqual(EXPECTED_TOTAL);
    expect(filtered[0].status?.toLowerCase()).toBe("approved");
    expect(filtered[1].status?.toLowerCase()).toBe("approved");
  });
});

describe("findClosestLocation", () => {
  it("returns the closest location", () => {
    const closest_1 = findClosestLocation(
      { latitude: 37.773972, longitude: -122.431297 },
      LOCATION_TEST_1
    );
    expect(closest_1).toEqual(LOCATION_TEST_1[0])

    const closest_2 = findClosestLocation(
      { latitude: 37.773972, longitude: -122.431297 },
      LOCATION_TEST_2
    );
    expect(closest_2).toEqual(LOCATION_TEST_2[1])
  });
});
