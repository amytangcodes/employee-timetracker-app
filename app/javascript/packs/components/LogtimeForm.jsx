import React, { Component } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

class LogtimeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateRef = React.createRef();
    this.clockInRef = React.createRef();
    this.clockOutRef = React.createRef();
    this.totalBreakDurationRef = React.createRef();
    this.totalLogDurationRef = React.createRef();
  }

  handleChange = (date) => {
    this.setState({ startDate: date });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("/api/v1/logtime_items", {
        logtime_item: {
          date: this.dateRef.current.value,
          clockIn: this.clockInRef.current.value,
          clockOut: this.clockOutRef.current.value,
          totalBreakDuration: this.totalBreakDurationRef.current.value,
          totalLogDuration: this.totalLogDurationRef.current.value,
        },
      })
      .then((res) => {
        const logtimeItem = res.data;
        this.props.createLogtimeItem(logtimeItem);
      })
      .catch((err) => {
        console.log(err);
      });
    evt.target.reset();
  };

  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Date</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Input fluid label="Clock In" placeholder="Clock In" />
          <Form.Input fluid label="Clock Out" placeholder="Clock Out" />
          <Form.Input
            fluid
            label="Total Break Time"
            placeholder="Total Break Time"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default LogtimeForm;

LogtimeForm.propTypes = {
  // createLogtimeItem: PropTypes.func.isRequired,
};
