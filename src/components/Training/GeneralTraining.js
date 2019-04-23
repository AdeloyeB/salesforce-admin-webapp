import React, { Component } from "react";

import firebase from "../../config/firebase";

export class GeneralTraining extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("trainingSessions");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          trainingAttendees: items[item].trainingAttendees,
          trainingContent: items[item].trainingContent,
          trainingOwner: items[item].trainingOwner,
          trainingManager: items[item].trainingManager,
          trainingOwnerEmailAddress: items[item].trainingOwnerEmailAddress,
          trainingTeam: items[item].trainingTeam
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
                  Training Owner: {item.trainingOwner} | Email Address:{" "}
                  {item.trainingOwnerEmailAddress}
                </h5>
                <div className="card-body">
                  <h5 className="card-title">
                    Manager: {item.trainingManager}
                  </h5>
                  <h5 className="card-title">
                    Attendees: {item.trainingAttendees}
                  </h5>
                  <p className="card-text">Team: {item.trainingTeam}</p>
                  <p className="card-text">{item.trainingContent}</p>
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

export default GeneralTraining;
