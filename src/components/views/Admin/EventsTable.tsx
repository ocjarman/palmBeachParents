import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "../../CustomMUI/Typography";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { RootState } from "../../../store";
import { EventType } from "../../../utils/interfaces";

export default function EventsTable() {
  const events = useSelector((state: RootState) => state.events.events);

  return (
    <Container
      style={{
        padding: "3%",
        backgroundColor: "white",
        borderRadius: "5px",
        justifyContent: "center",
        textAlign: "center",
        gap: "20vw",
      }}
    >
      <Typography variant="h5" component="h5">
        Events
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Event Name</TableCell>
            <TableCell>Hosted By</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event: EventType) => (
            <TableRow key={event.id}>
              <TableCell>{event.address ? event.address.city : null}</TableCell>
              <TableCell>
                {event.name}
              </TableCell>
              <TableCell>{event.hostName}</TableCell>
              <TableCell>{event.time}</TableCell>
              <TableCell>{event.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}