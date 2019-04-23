import React from "react";
import { shallow } from "enzyme";
import NavBar from "./components/Layout/NavBar/NavBar";
import Footer from "./components/Layout/Footer/Footer";
//import SignInWidget from "./components/auth/SignInWidget";
import Home from "./components/pages/Home/Home";
import GeneralTraining from "./components/Training/GeneralTraining";
import UserRequestsPage from "./components/pages/UserRequests/UserRequestPage";
//import Login from "./components/auth/Login";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("NavBar", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<NavBar debug />);

    expect(component).toMatchSnapshot();
  });
});

describe("Footer", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Footer debug />);

    expect(component).toMatchSnapshot();
  });
});

//Does not work when attempting to deploy application
// describe("Login", () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<Login debug />);

//     expect(component).toMatchSnapshot();
//   });
// });

//Does not work when attempting to deploy application
// describe("SignInWidget", () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<SignInWidget debug />);

//     expect(component).toMatchSnapshot();
//   });
// });

describe("Home", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home debug />);

    expect(component).toMatchSnapshot();
  });
});

describe("GeneralTraining", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<GeneralTraining debug />);

    expect(component).toMatchSnapshot();
  });
});

describe("UserRequestsPage", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<UserRequestsPage debug />);

    expect(component).toMatchSnapshot();
  });
});
