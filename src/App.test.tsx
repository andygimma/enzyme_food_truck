import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(
    <IntlProvider locale={"en"}>
      <App />
    </IntlProvider>
  );
  const linkElement = screen.getByText(/Food Truck/i);
  expect(linkElement).toBeInTheDocument();
});
