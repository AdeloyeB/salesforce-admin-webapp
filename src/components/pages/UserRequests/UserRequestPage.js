import React, { Component } from "react";

import NavBar from "../../layout/NavBar/NavBar";
import Footer from "../../layout/Footer/Footer";

import UserRequests from "./UserRequests";

export class UserRequestPage extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <div>
          <UserRequests />
        </div>
        <Footer />
      </section>
    );
  }
}

export default UserRequestPage;
