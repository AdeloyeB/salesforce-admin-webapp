import React, { Component } from "react";

import firebase from "../../../config/firebase";

export class UserRequests extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("userRequests");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          VIP: items[item].VIP,
          autoOpenSalesforce: items[item].autoOpenSalesforce,
          divisionTeam: items[item].divisionTeam,
          emailAddress: items[item].emailAddress,
          firstName: items[item].firstName,
          jobTitle: items[item].jobTitle,
          lastName: items[item].lastName,
          managerEmail: items[item].managerEmail,
          paCalendarSync: items[item].paCalendarSync,
          pardot: items[item].pardot,
          profile: items[item].profile,
          replicateUser: items[item].replicateUser,
          role: items[item].role
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
      <section className="display-item">
        <div className="wrapper">
          <ul>
            {this.state.items.map(item => {
              return (
                <li key={item.id}>
                  <h3>{item.firstName}</h3>
                  <p>brought by: {item.emailAddress}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default UserRequests;
