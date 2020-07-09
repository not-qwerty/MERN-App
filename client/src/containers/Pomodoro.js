import React, { Component } from "react";
import TomatoClock from "../components/TomatoClock";
import PauseClock from "../components/PauseClock";

import { Switch, Route, Link } from "react-router-dom";

class Pomodoro extends Component {
  constructor() {
    super();

    this.state = {
      tomatoTime: 1500,
      pauseTime: 300,
      tomatoTitle: "Pomodoro",
      pause: "Take a Break",
    };
  }
  render() {
    const mainStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40vh",
      textDecoration: "none",
      color: "black",
    };

    const main = {
      padding: 20,
      borderStyle: "solid",
      textDecoration: "none",
    };

    return (
      <div>
        <div style={mainStyle}>
          <div className="main" style={main}>
            <Link to="/pomodoro/clock">Tomato Session</Link>
          </div>
          <div className="main" style={main}>
            <Link to="/pomodoro/pause">Take a break!</Link>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/pomodoro/clock">
              <TomatoClock
                tomatoTime={this.state.tomatoTime}
                title={this.state.tomatoTitle}
              />
            </Route>

            <Route path="/pomodoro/pause">
              <PauseClock
                pauseTime={this.state.pauseTime}
                title={this.state.pause}
              />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Pomodoro;
