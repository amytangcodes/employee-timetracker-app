import React, { Component } from "react";
import ReactDOM from "react-dom";

class LogtimeApp extends Component {
  render() {
    return (
      <div>
        <h2>Good day, NAME!</h2>
        <p>Your next shift:</p>
      </div>
    );
  }
}

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("logtime-app");
  app && ReactDOM.render(<LogtimeApp />, app);
});
