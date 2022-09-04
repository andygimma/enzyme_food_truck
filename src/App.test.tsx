import React from "react";
import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(
    <IntlProvider locale={"en"}>
      <App />
    </IntlProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
