import React from "react";
import { Button, Modal } from "semantic-ui-react";

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
};

const LogtimeModal = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color="blue" fluid>
          Manually Log Your hours
        </Button>
      }
      style={inlineStyle.modal}
    >
      <Modal.Header>Fill Out Your Log Details</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <LogtimeForm />
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
