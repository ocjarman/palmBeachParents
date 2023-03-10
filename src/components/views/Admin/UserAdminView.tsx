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
import axios from "axios";

export default function UsersAdminView() {
//   const users = useSelector((state) => state.adminUserList.users);
  const [searchUser, setSearchUser] = useState();
  const [searchFilter, setSearchFilter] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navUserAdd = () => navigate("./add");
  const navUserEdit = (event: { target: { value: any; }; }) => navigate(`./${event.target.value}`);

  const handleSearchUser = (event: { target: { innerHTML: any; innerText: any; value: any; }; }) => {
    setSearchUser(
      event.target.innerHTML || event.target.innerText || event.target.value
    );
  };


  const getUsers = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const tokenData = {
        headers: {
          authorization: token,
        },
      };

      const users = await axios.get(`/api/user/userlist`, tokenData);
    //   dispatch(setUserList(users.data));
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

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
            
              <TableRow key={344}>
                <TableCell>users username</TableCell>
                <TableCell>first</TableCell>
                <TableCell>last</TableCell>
                <TableCell>email</TableCell>
                <TableCell>phone</TableCell>
                <TableCell>birthday</TableCell>
                <TableCell>
                  <Button onClick={() => {navUserEdit}}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            
            {/* {searchFilter?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNum}</TableCell>
                <TableCell>{user.birthday.split("T")[0]}</TableCell>
                <TableCell>
                  <Button size="small" value={user.id} onClick={navUserEdit}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
}
