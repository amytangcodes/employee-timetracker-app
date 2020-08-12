import React from "react";
import { Grid, Card, Image } from "semantic-ui-react";

import ClockContainer from "./ClockContainer";

const UserProfile = () => {
  return (
    <div className="container">
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Good day, Molly Baker!</Card.Header>
                <Card.Meta>Daycare Organizer</Card.Meta>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                  Molly is a daycare organizer living in Lethbridge who enjoys
                  playing guitar and hanging with her cat.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <ClockContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default UserProfile;
