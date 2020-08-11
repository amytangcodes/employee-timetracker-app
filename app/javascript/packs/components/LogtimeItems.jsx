import React from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

import axios from "axios";

import LogtimeItem from "./LogtimeItem";

const LogtimeItems = ({ logtimeItems }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Clock In</Table.HeaderCell>
          <Table.HeaderCell>Clock Out</Table.HeaderCell>
          <Table.HeaderCell>Break Duration</Table.HeaderCell>
          <Table.HeaderCell>Total Duration</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <LogtimeItem logtimeItems={logtimeItems} />
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="6">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default LogtimeItems;
