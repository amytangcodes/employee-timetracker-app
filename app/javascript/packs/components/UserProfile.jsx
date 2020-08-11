import React from "react";
import { Segment, Image } from "semantic-ui-react";

import ClockContainer from "./ClockContainer";

const UserProfile = () => {
  return (
    <Segment raised>
      <Image
        size="small"
        src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
        wrapped
        circular
      />
      <h2 className="display-4">Good day, Patrick!</h2>
      <ClockContainer />
    </Segment>
  );
};

export default UserProfile;
