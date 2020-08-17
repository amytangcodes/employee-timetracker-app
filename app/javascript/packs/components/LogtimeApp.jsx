import React from "react";
import ReactDOM from "react-dom";

import useLogtimeItemState from "./useLogtimeItemState";
import UserProfile from "./UserProfile";
import LogtimeItems from "./LogtimeItems";
import LogtimeModal from "./LogtimeModal";

const inlineStyle = {
  appWrapper: {
    paddingBottom: "40px",
  },
};

const LogtimeApp = () => {
  const {
    logtimeItems,
    setLogtimeItems,
    deleteLogtimeItem,
  } = useLogtimeItemState([]);
  console.log({ logtimeItems });

  return (
    <div style={inlineStyle.appWrapper}>
      <UserProfile />
      <LogtimeItems
        logtimeItems={logtimeItems}
        setLogtimeItems={setLogtimeItems}
        deleteLogtimeItem={deleteLogtimeItem}
      />
      <LogtimeModal />
    </div>
  );
};

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("logtime-app");
  app && ReactDOM.render(<LogtimeApp />, app);
});
