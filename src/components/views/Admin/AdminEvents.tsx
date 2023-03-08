import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Button } from "@mui/material";
interface Column {
  id:
    | "edit"
    | "id"
    | "name"
    | "hostName"
    | "hostEmail"
    | "hostPhone"
    | "location"
    | "description"
    | "date"
    | "time"
    | "cost"
    | "category"
    | "ageGroups"
  label: string;
  minWidth?: number;
  maxWidth?: number;
}

const columns: Column[] = [
  { id: "edit", label: "Edit Details", minWidth: 170, maxWidth: 100 },
  { id: "id", label: "Event Id", minWidth: 170, maxWidth: 100 },
  { id: "name", label: "Name", minWidth: 170, maxWidth: 100 },
  { id: "hostName", label: "Host Name", minWidth: 100, maxWidth: 100 },
  { id: "hostEmail", label: "Host Email", minWidth: 100, maxWidth: 100 },
  { id: "hostPhone", label: "Host Phone", minWidth: 100, maxWidth: 100 },
  { id: "location", label: "Location", minWidth: 170, maxWidth: 100 },
  { id: "description", label: "Description", minWidth: 170, maxWidth: 100 },
  { id: "time", label: "time", minWidth: 170, maxWidth: 100 },
  { id: "cost", label: "cost", minWidth: 170, maxWidth: 100 },
  { id: "category", label: "category", minWidth: 170, maxWidth: 100 },
  { id: "ageGroups", label: "ageGroups", minWidth: 170, maxWidth: 100 },
];



export default function AdminEvents() {
  const events = useSelector((state: RootState) => state.events.events)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              <TableCell align="left" colSpan={11}>
                Event Details
              </TableCell>
            </TableRow>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {events
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((event) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={event.id}>
                        <TableCell width={100}>
                           <Button size="small" value={event.id}>
                             Edit
                           </Button>
                         </TableCell>
                        <TableCell width={100}>
                          {event.id}
                        </TableCell>
                        <TableCell width={100}>
                          {event.name}
                        </TableCell>
                        <TableCell width={100}>
                          {event.hostName}
                        </TableCell>
                        <TableCell width={100}>
                          {event.hostEmail}
                        </TableCell>
                        <TableCell width={100}>
                          {event.hostNumber}
                        </TableCell>
                        <TableCell width={100}>
                          {event.address}
                        </TableCell>
                        <TableCell width={100}>
                          {event.description}
                        </TableCell>
                        <TableCell width={100}>
                          {event.time}
                        </TableCell>
                        <TableCell width={100}>
                          {event.cost}
                        </TableCell>
                        <TableCell width={100}>
                          {/* {event.category} */}
                        </TableCell>
                        <TableCell sx={{width: '5%'}}>
                          {/* {event.ageGroups} */}
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={events.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

// import React, { useEffect, useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { useDispatch, useSelector } from "react-redux";
// import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";
// import Container from "@mui/material/Container";
// import { EventType } from "../../../utils/interfaces";
// import { RootState } from "../../../store";
// import Typography from "../../CustomMUI/Typography";
// import Button from '../../CustomMUI/Button'

// export default function AdminEvents() {
//   const events = useSelector((state: RootState) => state.events.events);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

// //   const navEventEdit = (eventId) => navigate(`${eventId}`);
// //   const navEventAdd = () => navigate(`add`);

// //   const displayEdit = (event) => {
// //     const filteredEvent = events.filter(
// //       (event) => event.id === Number(event.target.value)
// //     );
// //     dispatch(setEventToEdit(filteredEvent));
// //     navEventEdit(Number(event.target.value));
// //   };

//   return (
//     <Container
//       style={{
//         padding: "3%",
//         backgroundColor: "white",
//         justifyContent: "center",
//         textAlign: "center",
//       }}
//     >
//       <Typography variant="h5" component="h5">
//         Events
//       </Typography>
//       <Container
//         style={{
//           display: "flex",
//           justifyContent: "space-evenly",
//           gap: "20vw",
//           padding: '3%'
//         }}
//       >
//         <Button
//          color="secondary"
//          variant="contained"
//          size="large"
//          component="a"
//         //  onClick={() => doAddEventStuff}
//          sx={{ maxWidth: 200, margin: '1%' }}
//         >
//           Add Event
//         </Button>
//       </Container>

//       <Table size="small" sx={{width: "5%"}}>
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{width: '25%'}}>Event #</TableCell>
//             <TableCell sx={{width: '25%'}}>Event Name</TableCell>
//             <TableCell sx={{width: '25%'}}>Host Name</TableCell>
//             <TableCell sx={{width: '25%'}}>Host Email</TableCell>
//             <TableCell sx={{width: '25%'}}>Host Phone</TableCell>
//             <TableCell sx={{width: '25%'}}>Location</TableCell>
//             <TableCell sx={{width: '25%'}}>Description</TableCell>
//             <TableCell sx={{width: '25%'}}>Date</TableCell>
//             <TableCell sx={{width: '25%'}}>Time</TableCell>
//             <TableCell sx={{width: '25%'}}>Cost</TableCell>
//             <TableCell sx={{width: '25%'}}>Category</TableCell>
//             <TableCell sx={{width: '25%'}}>Ages</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {events.map((event: EventType) => (
//             <TableRow key={event.id}>
//               <TableCell>{event.name}</TableCell>
//               <TableCell>{event.hostName}</TableCell>
//               <TableCell>{event.hostEmail}</TableCell>
//               <TableCell>{event.hostNumber}</TableCell>
//               <TableCell>{event.address}</TableCell>
//               <TableCell>{event.description}</TableCell>
//               {/* <TableCell>{event.date}</TableCell> */}
//               <TableCell>{event.time}</TableCell>
//               <TableCell>{event.cost}</TableCell>
//               {/* <TableCell>{event.category}</TableCell>
//               <TableCell>{event.ageGroups}</TableCell> */}
//               <TableCell>
//                 <Button size="small" value={event.id}>
//                   Edit
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Container>
//   );
// }
