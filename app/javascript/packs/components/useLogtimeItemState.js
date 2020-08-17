import { useState, useEffect } from "react";
import axios from "axios";
import setAxiosHeaders from "./AxiosHeaders";

export default (initialValue) => {
  useEffect(() => {
    axios
      .get("/api/v1/logtime_items")
      .then((res) => setLogtimeItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [logtimeItems, setLogtimeItems] = useState(initialValue);

  return {
    logtimeItems,
    addLogtimeItem: (logtimeItemText) => {
      setLogtimeItems([...logtimeItems, logtimeItemText]);
    },
    deleteLogtimeItem: (logtimeItemIndex) => {
      setAxiosHeaders();
      axios
        .delete(`/api/v1/logtime_items/${logtimeItemIndex}`)
        .then((res) => {
          setLogtimeItems(
            logtimeItems.filter(
              (logtimeItem) => logtimeItem.id !== logtimeItemIndex
            )
          );
        })
        .catch((err) => console.log(err));
      const newLogtimeItems = logtimeItems.filter(
        (_, index) => index !== logtimeItemIndex
      );
      setLogtimeItems(newLogtimeItems);
    },
  };
};
