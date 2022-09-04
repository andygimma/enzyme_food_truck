import React from "react";
import { IntlProvider } from "react-intl";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { setLanguage, supportedLanguages } from "./utils/language/language";

// SET CURRENT LANGUAGE BASED ON BROWSER LOCALE
const locale = navigator.language.split(/[-_]/)[0];
const currentLanguage = setLanguage(locale);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <IntlProvider
      locale={currentLanguage}
      messages={supportedLanguages[currentLanguage]}
    >
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
