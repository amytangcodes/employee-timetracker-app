import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

const LogtimeForm = (props) => {
  console.log({ props });

  const [log, setLog] = useState(props.initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLog({ ...log, [name]: value });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !log.date ||
          !log.clockIn ||
          !log.ClockOut ||
          !log.totalBreakDuration
        )
          return;
        props.addLog(log);
        setLog(props.initialFormState);
      }}
    >
      <Form.Group widths="equal">
        <Form.Field>
          <label>Date</label>
          <DatePicker
            selected={log.date}
            value={log.date}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Input
          fluid
          label="Clock In"
          placeholder="Clock In"
          value={log.clockIn}
          onChange={handleInputChange}
        />
        <Form.Input
          fluid
          label="Clock Out"
          placeholder="Clock Out"
          value={log.clockOut}
          onChange={handleInputChange}
        />
        <Form.Input
          fluid
          label="Total Break Time"
          placeholder="Total Break Time"
          value={log.totalBreakDuration}
          onChange={handleInputChange}
        />
      </Form.Group>
    </Form>
  );
};

export default LogtimeForm;
