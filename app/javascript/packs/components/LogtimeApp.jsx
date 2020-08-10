import React, { Component } from "react";
import ReactDOM from "react-dom";
import LogtimeItems from "./LogtimeItems";

class LogtimeApp extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Good day, NAME!</h1>
          <p className="lead">Your next shift:</p>
          <hr />
        </div>

        <LogtimeItems />
      </div>
    );
  }
}

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("logtime-app");
  app && ReactDOM.render(<LogtimeApp />, app);
});
