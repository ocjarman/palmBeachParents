import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { RootState } from "../../../store";

export default function AdminUsers() {
  const allUsers = useSelector((state: RootState) => state.allUsers.allUsers);

  const navigate = useNavigate();

  const navUserAdd = () => navigate("./add");
  const navUserEdit = (event: { target: { value: any; }; }) => navigate(`./${event.target.value}`);

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
        Users
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
          variant="contained"
          style={{ width: "400px", backgroundColor: "black", color: "white" }}
          onClick={navUserAdd}
        >
          Add User
        </Button>
      </Container>

      <div style={{ overflowX: "auto", height: "550px" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Birth Date</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNum}</TableCell>
                <TableCell><>{user.birthday}</></TableCell>
                <TableCell>
                  <Button size="small" value={user.id}>
                    Edit
                  </Button>
                  {/* <Button size="small" value={user.id} onClick={navUserEdit}>
                    Edit
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
}
