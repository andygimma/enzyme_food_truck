import { FormattedMessage } from "react-intl";
import "App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <FormattedMessage
          id="app.text"
          defaultMessage="Weclome"
          description="Welcome text"
        />

        <FormattedMessage
          id="app.link"
          defaultMessage="Go to link"
          description="Welcome link"
        />
      </header>
    </div>
  );
};

export default App;
