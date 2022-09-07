import renderer from "react-test-renderer";
import { IntlProvider } from "react-intl";
import Navbar from "./Navbar";

describe("Navbar", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<IntlProvider locale="en"><Navbar /></IntlProvider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})

