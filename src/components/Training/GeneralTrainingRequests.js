import React, { Component } from "react";

import NavBar from "../layout/NavBar/NavBar";
import Footer from "../layout/Footer/Footer";

import GeneralTraining from "./GeneralTraining";

export class GeneralTrainingRequests extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <div>
          <GeneralTraining />
        </div>
        <Footer />
      </section>
    );
  }
}

export default GeneralTrainingRequests;
