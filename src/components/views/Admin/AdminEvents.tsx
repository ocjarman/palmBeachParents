import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";

export default function AdminEvents() {
//   const events = useSelector((state) => state.events.events);
  const [searchEvent, setSearchEvent] = useState();
  const [searchFilter, setSearchFilter] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

//   const navEventEdit = (eventId) => navigate(`${eventId}`);
//   const navEventAdd = () => navigate(`add`);

//   const displayEdit = (event) => {
//     const filteredEvent = events.filter(
//       (event) => event.id === Number(event.target.value)
//     );
//     dispatch(setEventToEdit(filteredEvent));
//     navEventEdit(Number(event.target.value));
//   };

//   const handleSearchEvent = (event: { target: { innerHTML: any; innerText: any; value: any; }; }) => {
//     setSearchEvent(
//       event.target.innerHTML || event.target.innerText || event.target.value
//     );
//   };

//   useEffect(() => {
//     setSearchFilter(
//       events.filter((event) => {
//         return searchEvent
//           ? event.id === Number(searchEvent?.split(".")[0]) ||
//               event.albumName
//                 ?.toLowerCase()
//                 ?.includes(searchEvent?.toLowerCase()) ||
//               event.albumName?.includes(
//                 searchEvent?.split(".")[1]?.toLowerCase()
//               )
//           : event.id !== Number(searchEvent?.split(".")[0]);
//       })
//     );
//   }, [searchEvent, events]);

  return (
    <Container
      style={{
        padding: "3%",
        backgroundColor: "white",
        borderRadius: "5px",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" component="h5">
        Events
      </Typography>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "20vw",
          padding: '3%'
        }}
      >
        {/* <Autocomplete
          fullWidth
          freeSolo
          id="product-search"
          disableClearable
          onChange={handleSearchEvent}
          options={events.map((option) => {
            return `${option.id}. ${option.albumName}`;
          })}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              onChange={handleSearchEvent}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        /> */}
        <Button
          style={{ width: "400px", backgroundColor: "black", color: "white" }}
          fullWidth
          sx={{ width: "30vw"}}
          variant="contained"
        //   onClick={navEventAdd}
        >
          Add product
        </Button>
      </Container>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Event #</TableCell>
            <TableCell>Event Name</TableCell>
            <TableCell>Host</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow key={5453}>
              <TableCell>event name</TableCell>
              <TableCell>event host</TableCell>
              <TableCell>event email</TableCell>
              <TableCell>event phone</TableCell>
              <TableCell>event location</TableCell>
              <TableCell>event date</TableCell>
              <TableCell>event time</TableCell>
              <TableCell>event cost</TableCell>
              <TableCell>
                <Button size="small">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
        
          {/* {searchFilter.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.eventName}</TableCell>
              <TableCell>{event.contactName}</TableCell>
              <TableCell>{event.contactEmail}</TableCell>
              <TableCell>{event.contactNumber}</TableCell>
              <TableCell>{event.eventAddress}</TableCell>
              <TableCell>{event.eventDate}</TableCell>
              <TableCell>{event.eventTime}</TableCell>
              <TableCell>
                <Button size="small" value={event.id} onClick={displayEdit}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </Container>
  );
}
