// import React from "react";
// import { useTable } from "react-table";

// const LogtimeTable = ({ logtimeItems, deleteLogtimeItem }) => {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Date",
//         accessor: "date",
//       },
//       {
//         Header: "Clock In",
//         accessor: "clockIn",
//       },
//       {
//         Header: "Clock Out",
//         accessor: "clockOut",
//       },
//       {
//         Header: "Total Log Time",
//         accessor: "totalLogDuration",
//       },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyprops,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, logtimeItems });

//   return (
//     <table {...getTableProps()} style={{ border: "1px solid violet" }}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => {
//               <th
//                 {...column.getHeaderProps()}
//                 style={{
//                   borderBottom: "solid 3px red",
//                   background: "aliceblue",
//                   color: "black",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {column.render("Header")}
//               </th>;
//             })}
//           </tr>
//         ))}
//       </thead>
//     </table>
//   );
// };

// export default LogtimeTable;
