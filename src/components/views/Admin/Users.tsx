import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "../../CustomMUI/Button";
import Typography from "../../CustomMUI/Typography";

export default function Users() {
//   const records = useSelector((state) => state.records.records);
  const [searchRecord, setSearchRecord] = useState();
  const [searchFilter, setSearchFilter] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

//   const navRecordEdit = (recordId) => navigate(`${recordId}`);
//   const navRecordAdd = () => navigate(`add`);

//   const displayEdit = (event) => {
//     const filteredRecord = records.filter(
//       (record) => record.id === Number(event.target.value)
//     );
//     dispatch(setRecordToEdit(filteredRecord));
//     navRecordEdit(Number(event.target.value));
//   };

//   const handleSearchRecord = (event) => {
//     setSearchRecord(
//       event.target.innerHTML || event.target.innerText || event.target.value
//     );
//   };

//   useEffect(() => {
//     setSearchFilter(
//       records.filter((record) => {
//         return searchRecord
//           ? record.id === Number(searchRecord?.split(".")[0]) ||
//               record.albumName
//                 ?.toLowerCase()
//                 ?.includes(searchRecord?.toLowerCase()) ||
//               record.albumName?.includes(
//                 searchRecord?.split(".")[1]?.toLowerCase()
//               )
//           : record.id !== Number(searchRecord?.split(".")[0]);
//       })
//     );
//   }, [searchRecord, records]);

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
        Products
      </Typography>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "20vw",
          padding: '3%'
        }}
      >
        <Button
          style={{ width: "400px", backgroundColor: "black", color: "white" }}
          fullWidth
          sx={{ width: "30vw"}}
          variant="contained"
        //   onClick={navRecordAdd}
        >
          Add user
        </Button>
      </Container>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>User Id #</TableCell>
            <TableCell>Username</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Birth Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell>users username</TableCell>
                <TableCell>first</TableCell>
                <TableCell>last</TableCell>
                <TableCell>email</TableCell>
                <TableCell>phone</TableCell>
                <TableCell>birthday</TableCell>
              <TableCell>
                <Button size="small">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          {/* {searchFilter.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.id}</TableCell>
              <TableCell>{record.albumName}</TableCell>
              <TableCell>{record.artist}</TableCell>
              <TableCell>{record.price}</TableCell>
              <TableCell>{record.year}</TableCell>
              <TableCell>
                <Button size="small" value={record.id} onClick={displayEdit}>
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
