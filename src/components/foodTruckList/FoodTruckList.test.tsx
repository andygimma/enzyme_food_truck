import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import FoodTruckList from "./FoodTruckList";

test("renders learn react link", () => {
  const names = ["first", "second", "third"];
  render(
    <IntlProvider locale={"en"}>
      <FoodTruckList names={names} />
    </IntlProvider>
  );
  const el1 = screen.getByText(/first/i);
  const el2 = screen.getByText(/second/i);
  const el3 = screen.getByText(/third/i);

  expect(el1).toBeInTheDocument();
  expect(el2).toBeInTheDocument();
  expect(el3).toBeInTheDocument();
});
