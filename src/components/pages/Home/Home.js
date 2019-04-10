import React, { Component } from "react";

import NavBar from "../../layout/NavBar/NavBar";
import Footer from "../../layout/Footer/Footer";

export class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <section className="container">hi</section>
        <Footer />
      </div>
    );
  }
}

export default Home;
