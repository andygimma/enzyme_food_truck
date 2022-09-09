import {
  filterByOpenTrucks,
  findClosestLocation,
  orderByDistance,
} from "./transformations";
import { FOOD_TRUCKS, LOCATION_TEST_1, LOCATION_TEST_2 } from "data/trucks";
import { CENTROID } from "data/map";

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
    const closest_1 = findClosestLocation(CENTROID, LOCATION_TEST_1);
    expect(closest_1).toEqual(LOCATION_TEST_1[0]);

    const closest_2 = findClosestLocation(CENTROID, LOCATION_TEST_2);
    expect(closest_2).toEqual(LOCATION_TEST_2[1]);
  });
});

describe("orderByDistance", () => {
  it("orders by distance", () => {
    const ordered = orderByDistance(CENTROID, FOOD_TRUCKS);
    expect(ordered[0].applicant).toEqual("second");
    expect(ordered[1].applicant).toEqual("third");
    expect(ordered[2].applicant).toEqual("first");
  });
});
