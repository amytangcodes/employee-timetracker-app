import React from "react";
import { Table, Icon } from "semantic-ui-react";

const LogtimeItem = ({ logtimeItems }) => {
  return (
    <>
      {logtimeItems &&
        logtimeItems.map((logtimeItem) => {
          return (
            <Table.Row key={logtimeItem.id}>
              <Table.Cell>{logtimeItem.date}</Table.Cell>
              <Table.Cell>{logtimeItem.clockIn}</Table.Cell>
              <Table.Cell>{logtimeItem.clockOut}</Table.Cell>
              <Table.Cell>{logtimeItem.totalLogDuration}</Table.Cell>
              <Table.Cell className="text-center">
                <Icon name="edit" className="gutter" title="Edit" link />
                <Icon
                  name="trash alternate"
                  className="gutter"
                  title="Delete"
                  link
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
    </>
  );
};

export default LogtimeItem;
