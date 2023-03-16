import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { setShowUpdateForm, setUserToEdit } from "../../../store/userSlice";
import { setUser } from "../../../store/userSlice";
import Typography from "../../CustomMUI/Typography";

const UpdateUserInfoForm = () => {
  const userToEdit = useSelector((state: RootState) => state.user.userToEdit);
  const user = useSelector((state: RootState) => state.user.user);
  const showUpdateForm = useSelector((state: RootState) => state.user.showUpdateForm);
  const dispatch = useDispatch();

  const handleUserStateChange = (e: { target: any }) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    dispatch(setUserToEdit({ ...userToEdit, [name]: value }));
  };

  const handleUpdate = async (event: { preventDefault: () => void }) => {
    try {
      event.preventDefault();
      // get token of logged in user
      const token = window.localStorage.getItem("token");
      // data to send to backend
      const tokenData = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };

      const newData = {
        firstName: userToEdit.firstName || user.firstName,
        lastName: userToEdit.lastName || user.lastName,
        phoneNum: userToEdit.phoneNum || user.phoneNum,
        birthday: userToEdit.birthday || user.birthday,
        address: userToEdit.address || user.address,
        avatarUrl: userToEdit.avatarUrl || user.avatarUrl,
        companyName: userToEdit.companyName || user.companyName,
      };


      const updatedUser = await axios.put(`/api/user/`, newData, tokenData);
      dispatch(setUser(updatedUser.data));
      dispatch(setShowUpdateForm(false))
    } catch (err) {
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
      <form>
        <FormControl>
          <InputLabel htmlFor="firstname-input">First Name</InputLabel>
          <Input
            name="firstName"
            defaultValue={user.firstName}
            sx={{ margin: "20px" }}
            onChange={handleUserStateChange}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="lastname-input">Artist Name</InputLabel>
          <Input
            name="lastName"
            defaultValue={user.lastName}
            sx={{ margin: "20px" }}
            onChange={handleUserStateChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="phone-input">Phone Number</InputLabel>
          <Input
            name="phoneNum"
            defaultValue={user.phoneNum}
            sx={{ margin: "20px" }}
            onChange={handleUserStateChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel shrink htmlFor="birthday-input">
            Birthday:
          </InputLabel>
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
            name="avatarUrl"
            defaultValue={user.avatarUrl}
            sx={{ margin: "20px" }}
            onChange={handleUserStateChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="companyname-input">Company Name</InputLabel>
          <Input
            name="companyName"
            defaultValue={user.companyName}
            sx={{ margin: "20px" }}
            onChange={handleUserStateChange}
          />
        </FormControl>
      </form>

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
        <Button
          size="small"
          onClick={() => dispatch(setShowUpdateForm(false))}
          variant="contained"
          sx={{
            my: 2,
            color: "secondary.light",
            display: "block",
            maxWidth: "25vw",
          }}
        >
          Cancel
        </Button>
      </Container>
    </Container>
  );
};

export default UpdateUserInfoForm;
