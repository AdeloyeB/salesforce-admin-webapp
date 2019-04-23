import React, { Component } from "react";

import NavBar from "../../layout/NavBar/NavBar";
import Footer from "../../layout/Footer/Footer";

import ControlledCarousel from "../../ControlledCarousel";
import SFProjects from "../../SFProjects";
import SFTeam from "../../SFTeam";

export class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <ControlledCarousel />
          <SFProjects />
          <SFTeam />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
