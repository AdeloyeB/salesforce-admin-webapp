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

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <section className="display-item container">
        <div className="wrapper">
          {this.state.items.map(item => {
            return (
              <div key={item.id} class="card">
                <h5 className="card-header">
                  Training Owner: {item.firstName} {item.lastName} | Email
                  Address:{item.emailAddress}
                </h5>
                <div className="card-body">
                  <h5 className="card-title">
                    Manager Email: {item.managerEmail}
                  </h5>
                  <h5 className="card-title">Job Title: {item.jobTitle}</h5>
                  <h5 className="card-title">Role: {item.role}</h5>
                  <h5 className="card-title">Profile: {item.profile}</h5>
                  <p className="card-text">
                    Replicate User: {item.replicateUser}
                  </p>
                  <p className="card-text">Team: {item.divisionTeam}</p>
                  <p className="card-text">VIP User: {item.VIP}</p>
                  <p className="card-text">Pardot User: {item.pardot}</p>
                  <p className="card-text">
                    Personal Assistant Sync: {item.paCalendarSync}
                  </p>
                  <button
                    className="btn btn-success"
                    onClick={() => this.removeItem(item.id)}
                  >
                    Completed
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default UserRequests;
