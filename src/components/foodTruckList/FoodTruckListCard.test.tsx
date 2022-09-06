import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import FoodTruckListCard from "./FoodTruckListCard";
import { FOOD_TRUCKS } from "data/trucks";

describe("FoodTruckListCard", () => {
  test("renders the correct text", () => {
    const truck = FOOD_TRUCKS[0];
    render(
      <IntlProvider locale={"en"}>
        <FoodTruckListCard truck={truck} />
      </IntlProvider>
    );
    const el1 = screen.getByText(new RegExp(truck.applicant, "i"));
    const el2 = screen.getByText(new RegExp(truck.address, "i"));
    const el3 = screen.getByText(new RegExp(truck.fooditems, "i"));

    expect(el1).toBeInTheDocument();
    expect(el2).toBeInTheDocument();
    expect(el3).toBeInTheDocument();
  });
});
