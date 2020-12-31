import { useState } from "react";

export default (initialValue) => {
  const [openModal, setOpenModal] = useState(initialValue);

  return {
    openModal,
    onChange: (evt) => {
      setOpenModal(evt.target.value);
    },
  };
};
