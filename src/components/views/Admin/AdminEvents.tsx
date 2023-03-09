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
import Button from "../../CustomMUI/Button";
import { useNavigate } from "react-router-dom";
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
    | "price"
    | "category"
    | "age";
  label: string;
}

const columns: Column[] = [
  { id: "edit", label: "Edit Details" },
  { id: "id", label: "Event Id" },
  { id: "name", label: "Name" },
  { id: "hostName", label: "Host Name" },
  { id: "hostEmail", label: "Host Email" },
  { id: "hostPhone", label: "Host Phone" },
  { id: "location", label: "Location" },
  { id: "description", label: "Description" },
  { id: "time", label: "Time" },
  { id: "price", label: "Price" },
  { id: "category", label: "Category" },
  { id: "age", label: "Age" },
];

export default function AdminEvents() {
  const events = useSelector((state: RootState) => state.events.events);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
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
      <TableContainer sx={{ height: "85%", overflowX: "scroll" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={11}>
                Event Details
              </TableCell>
              <TableCell align="right" colSpan={11}>
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  component="button"
                  onClick={() => navigate("/dashboard/events/add")}
                >
                  Add Event
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} width={10} sx={{ top: 57 }}>
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
                  <TableRow hover tabIndex={-1} key={event.id}>
                    <TableCell sx={{ width: "10px" }}>
                      <Button size="small" value={event.id}>
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>{event.id}</TableCell>
                    <TableCell width={150}>{event.name}</TableCell>
                    <TableCell>{event.hostName}</TableCell>
                    <TableCell>{event.hostEmail}</TableCell>
                    <TableCell>{event.hostPhone}</TableCell>
                    <TableCell>{event.address}</TableCell>
                    <TableCell>{event.description}</TableCell>
                    <TableCell>{event.time}</TableCell>
                    <TableCell>
                      {event.price ? event.price : "not listed"}
                    </TableCell>
                    <TableCell>
                      {event.category ? event.category : "not listed"}
                    </TableCell>
                    <TableCell sx={{ width: "5%" }}>
                      {event.age ? event.age : "not listed"}
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
