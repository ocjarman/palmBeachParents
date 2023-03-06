import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { setUserToEdit } from "../../../store/userSlice";
import { setUser } from "../../../store/userSlice";

const UpdateUserInfoForm = () => {
  const userToEdit = useSelector((state: RootState) => state.user.userToEdit);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navAllProducts = () => navigate("/dashboard/products");

  const handleUserStateChange = (e: { target: any; }) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    dispatch(setUserToEdit({ ...userToEdit, [name]: value }));
  };

  const handleUpdate = async (event: { preventDefault: () => void; }) => {
    try {
      event.preventDefault();
      // get token of logged in user
      const token = window.localStorage.getItem("token");
      // data to send to backend
      const tokenData = {
        headers: {
          authorization: token,
        },
      };

      const newData = {
        username: userToEdit.username,
        firstName: userToEdit.firstName,
        lastName: userToEdit.lastName,
        email: userToEdit.email,
        phoneNum: userToEdit.phoneNum,
        birthday: userToEdit.birthday,
        address: userToEdit.address,
        avatarUrl: userToEdit.avatarUrl,
        companyName: userToEdit.companyName,
      };
      
      await axios.put(`/api/user/${userToEdit.id}`, newData, tokenData);
      const updatedUserInfo = await axios.get(`/api/user/${user.id}`);

      dispatch(setUser(updatedUserInfo.data));
      navAllProducts();
    } catch (err) {
      console.log("error is here");
      console.log(err);
    }
  };



  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        placeSelf: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Typography sx={{ placeSelf: "center" }} variant={"h5"}>
        Update User Information
      </Typography>
      <Container
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          placeSelf: "center",
        }}
      >
        <form>
          <FormControl>
            <InputLabel htmlFor="username-input">Username</InputLabel>
            <Input
              name="username"
              defaultValue={userToEdit.username}
              sx={{ margin: "20px" }}
            />
          </FormControl>
          <br></br>
          <FormControl>
            <InputLabel htmlFor="firstname-input">First Name</InputLabel>
            <Input
              name="firstname"
              defaultValue={user.firstName}
              sx={{ margin: "20px" }}
              onChange={handleUserStateChange}
            />
          </FormControl>
          <br></br>
          <FormControl>
            <InputLabel htmlFor="lastname-input">Artist Name</InputLabel>
            <Input
              name="lastname"
              defaultValue={user.lastName}
              sx={{ margin: "20px" }}
              onChange={handleUserStateChange}
            />
          </FormControl>
          <br></br>
          <FormControl>
            <InputLabel htmlFor="email-input">Price</InputLabel>
            <Input
              name="email"
              defaultValue={user.email}
              sx={{ margin: "20px" }}
              onChange={handleUserStateChange}
            />
          </FormControl>
          <br></br>
          <FormControl>
            <InputLabel htmlFor="phone-input">Year</InputLabel>
            <Input
              name="phone"
              defaultValue={user.phoneNum}
              sx={{ margin: "20px" }}
              onChange={handleUserStateChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="birthday-input">Birthday</InputLabel>
            <Input
              name="birthday"
              defaultValue={user.birthday}
              type="date"
              sx={{ margin: "20px" }}
              onChange={handleUserStateChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="address-input">Mailing Address</InputLabel>
            <Input
              name="address"
              defaultValue={user.address}
              sx={{ margin: "20px" }}
              onChange={handleUserStateChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="image-input">Image</InputLabel>
            <Input
              name="image"
              defaultValue={user.avatarUrl}
              sx={{ margin: "20px" }}
              onChange={handleUserStateChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="companyname-input">Company Name</InputLabel>
            <Input
              name="companyname"
              defaultValue={user.companyName}
              sx={{ margin: "20px" }}
              onChange={handleUserStateChange}
            />
          </FormControl>
          <br></br>
        </form>
      </Container>
      <Container
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={handleUpdate}>
          Save Changes
        </Button>
        {/* <Button
          variant="contained"
          href={"/dashboard"}
          onClick={seeAllProducts}
        >
          Cancel
        </Button> */}
      
      </Container>
    </Container>
  );
};

export default UpdateUserInfoForm;
