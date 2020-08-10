import React from "react";
import LogtimeItem from "./LogtimeItem";

const LogtimeItems = ({ logtimeItems }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Clock In</th>
              <th scope="col">Clock Out</th>
              <th>Break Duration</th>
              <th className="text-right">Total Duration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <LogtimeItem logtimeItems={logtimeItems} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LogtimeItems;
