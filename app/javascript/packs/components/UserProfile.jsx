import React from "react";
import { Segment, Image } from "semantic-ui-react";

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
      <p className="lead">Your next shift:</p>
    </Segment>
  );
};

export default UserProfile;
