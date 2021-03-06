import React, { Component } from "react";
import "./App.css";
import Food from "./components/Food";
import Line1 from "./components/Line1";
import Line2 from "./components/Line2";
import Line3 from "./components/Line3";
import Win from "./components/Win";
import Lose from "./components/Lose.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      q: null
    };
    this.q1 = this.q1.bind(this);
    this.q2 = this.q2.bind(this);
    this.q3 = this.q3.bind(this);
    this.lose = this.lose.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
  }
  q1() {
    console.log("yo");
    this.setState({
      q: 2
    });
  }
  q2() {
    console.log("yo2");
    this.setState({
      q: 3
    });
  }
  q3() {
    console.log("yo3");
    this.setState({
      q: "WIN"
    });
  }
  lose() {
    console.log("Loser");
    this.setState({
      q: "LOSE"
    });
  }
  tryAgain() {
    console.log("Again");
    this.setState({
      q: null
    });
  }
  render() {
    switch (this.state.q) {
      case null:
        return (
          <div className="game">
            <Food />
            <Line1 q1={this.q1} lose={this.lose} />
            <Food />
          </div>
        );
      case 2:
        return (
          <div className="game">
            <Food />
            <Line2 q2={this.q2} lose={this.lose} />
            <Food />
          </div>
        );
      case 3:
        return (
          <div className="game">
            <Food />
            <Line3 q3={this.q3} lose={this.lose} />
            <Food />
          </div>
        );
      case "WIN":
        return (
          <div className="game">
            <Food />
            <Win tryAgain={this.tryAgain} />
            <Food />
          </div>
        );
      case "LOSE":
        return (
          <div className="game">
            <Food />
            <Lose tryAgain={this.tryAgain} />
            <Food />
          </div>
        );
      default:
        return (
          <div className="game">
            <Food />
            <Line1 q1={this.q1} lose={this.lose} />
            <Food />
          </div>
        );
    }
  }
}

export default App;
