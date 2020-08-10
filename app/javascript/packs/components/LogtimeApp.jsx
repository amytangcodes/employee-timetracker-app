import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import LogtimeItems from "./LogtimeItems";
import UserProfile from "./UserProfile";

class LogtimeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logtimeItems: [],
    };
    this.getLogtimeItems = this.getLogtimeItems.bind(this);
  }

  componentDidMount() {
    this.getLogtimeItems();
  }

  getLogtimeItems() {
    axios
      .get("/api/v1/logtime_items")
      .then((res) => {
        const logtimeItems = res.data;
        this.setState({ logtimeItems });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { logtimeItems } = this.state;
    return (
      <div>
        <UserProfile />
        <LogtimeItems logtimeItems={logtimeItems} />
      </div>
    );
  }
}

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("logtime-app");
  app && ReactDOM.render(<LogtimeApp />, app);
});
