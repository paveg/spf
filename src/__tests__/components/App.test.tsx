import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import App from "../../components/App";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
