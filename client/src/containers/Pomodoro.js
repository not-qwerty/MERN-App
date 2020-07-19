import React, { Component } from "react";
import TomatoClock from "../components/TomatoClock";
import PauseClock from "../components/PauseClock";

class Pomodoro extends Component {
  constructor() {
    super();

    this.state = {
      togleTimer: true,
      tomatoTime: 1500,
      pauseTime: 300,
      tomatoTitle: "Pomodoro",
      pause: "Take a Break",
    };
  }

  handleTogleTimer = () => {
    this.setState({ togleTimer: !this.state.togleTimer });
  };

  render() {

    const {
      togleTimer,
      tomatoTime,
      tomatoTitle,
      pauseTime,
      pause,
    } = this.state;

    const mainStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40vh",
      textDecoration: "none",
      color: "black",
      textAlign: "center",
    };

    const main = {
      padding: 20,
      borderStyle: "solid",
      textDecoration: "none",
      width: "10vw",
      display: "inline-block",
    };

    return (
      <div>
        <div style={mainStyle}>
          <button
            style={main}
            className="btn btn-primary"
            onClick={() => this.handleTogleTimer()}
          >
            {togleTimer ? "Pause Clock" : "Tomato Clock"}
          </button>
        </div>
        <div>
          {togleTimer ? (
            <TomatoClock tomatoTime={tomatoTime} title={tomatoTitle} />
          ) : (
            <PauseClock pauseTime={pauseTime} title={pause} />
          )}
        </div>
      </div>
    );
  }
}

export default Pomodoro;
