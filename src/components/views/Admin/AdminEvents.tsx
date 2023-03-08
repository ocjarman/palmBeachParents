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
import { EventType } from "../../../utils/interfaces";
import { RootState } from "../../../store";

export default function AdminEvents() {
  const events = useSelector((state: RootState) => state.events.events);
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
          Add Event
        </Button>
      </Container>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Event #</TableCell>
            <TableCell>Event Name</TableCell>
            <TableCell>Host Name</TableCell>
            <TableCell>Host Email</TableCell>
            <TableCell>Host Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Ages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event: EventType) => (
            <TableRow key={event.id}>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.hostName}</TableCell>
              <TableCell>{event.hostEmail}</TableCell>
              <TableCell>{event.hostNumber}</TableCell>
              <TableCell>{event.address}</TableCell>
              <TableCell>{event.description}</TableCell>
              {/* <TableCell>{event.date}</TableCell> */}
              <TableCell>{event.time}</TableCell>
              <TableCell>{event.cost}</TableCell>
              {/* <TableCell>{event.category}</TableCell>
              <TableCell>{event.ageGroups}</TableCell> */}
              <TableCell>
                <Button size="small" value={event.id}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
