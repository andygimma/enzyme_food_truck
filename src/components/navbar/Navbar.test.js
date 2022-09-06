import renderer from "react-test-renderer";
import { IntlProvider } from "react-intl";
import Navbar from "./Navbar";

// NOTE I use snapshots sparingly. Generally only for a component that is unlikely to be changed on purpose.
// An example could be our map container
it("renders correctly", () => {
    const tree = renderer.create(<IntlProvider locale="en"><Navbar /></IntlProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});
