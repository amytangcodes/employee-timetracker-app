import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

import LogtimeForm from "./LogtimeForm";

const inlineStyle = {
  modal: {
    height: "30%",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  actions: {
    width: "100%",
    position: "fixed",
    bottom: "0",
  },
  icon: {
    paddingRight: "25px",
  },
};

const LogtimeModal = () => {
  const [open, setOpen] = React.useState(false);

  const initialFormState = {
    date: "",
    clockIn: "",
    clockOut: "",
    totalBreakDuration: "",
  };

  const addLog = (log) => {
    axios
      .post("/api/v1/logtime_items", {
        logtime_item: {
          date: log.date,
          clockIn: log.clockIn,
          clockOut: log.clockOut,
          totalBreakDuration: log.totalBreakDuration,
        },
      })
      .then((res) => createLogtimeItems(res.data))
      .catch((err) => console.log(err));
    e.target.reset();
    setLogs([...Logs, log]);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button icon color="blue" fluid>
          <Icon name="plus" style={inlineStyle.icon} /> Manually Log Your hours
        </Button>
      }
      style={inlineStyle.modal}
    >
      <Modal.Header>Fill Out Your Log Details</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <LogtimeForm addLog={addLog} initialFormState={initialFormState} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions style={inlineStyle.actions}>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default LogtimeModal;
