import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import UserProfile from "./UserProfile";
import LogtimeItems from "./LogtimeItems";

const LogtimeApp = () => {
  useEffect(() => {
    axios
      .get("/api/v1/logtime_items")
      .then((res) => setLogtimeItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [logtimeItems, setLogtimeItems] = useState([]);

  return (
    <div>
      <UserProfile />

      <LogtimeItems logtimeItems={logtimeItems} />
    </div>
  );
};

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("logtime-app");
  app && ReactDOM.render(<LogtimeApp />, app);
});
