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
          trainingOwner: items[item].trainingOwner,
          trainingManager: items[item].trainingManager
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
                  <h3>{item.trainingOwner}</h3>
                  <p>brought by: {item.trainingManager}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default GeneralTraining;
