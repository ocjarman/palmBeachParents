import React, { useState, BaseSyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/CustomMUI/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Typography from "./CustomMUI/Typography";
import { RootState } from "../store";
import { setNewUser } from "../store/newUserSlice";
import { setUser } from "../store/userSlice";

const NewUserForm = () => {
  const { newUser } = useSelector((state: RootState) => state.newUser);
  const [validity, setValidity] = useState({ username: false, email: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserStateChange = (e: BaseSyntheticEvent) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    dispatch(setNewUser({ ...newUser, [name]: value }));
  };

  const handleSubmit = async (event: BaseSyntheticEvent) => {
    if (!Object.values(validity).includes(true)) {
      try {
        event.preventDefault();
        const { data: created } = await axios.post("/api/user", newUser);
        dispatch(setUser(created));
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const validateUsername = async (event: BaseSyntheticEvent) => {
    try {
      const currentUsername = event.target.value;
      const response = await axios.post("/api/user/usernameAuth", {
        currentUsername,
      });
      const usernameValid = response.status !== 200;
      setValidity({ ...validity, username: usernameValid });
    } catch (error) {
      setValidity({ ...validity, username: true });
    }
  };

  const validateEmail = async (event: BaseSyntheticEvent) => {
    try {
      const currentEmail = event.target.value;
      const response = await axios.post("/api/user/userEmailAuth", {
        currentEmail,
      });
      const emailValid = response.status !== 200;
      setValidity({ ...validity, email: emailValid });
    } catch (error) {
      setValidity({ ...validity, email: true });
    }
  };

  return (
      <Container sx={{ display: "flex", flexDirection: "column", placeSelf: "center" }}>
        <Typography sx={{ placeSelf: "center" }} variant={"h4"}>
          Create Your Account
        </Typography>
        <form style={{ placeSelf: "center" }}>
            <FormControl error={validity.username} required>
              <InputLabel htmlFor="username-input">Username</InputLabel>
              <Input
                name="username"
                id="username-input"
                aria-describedby="username-helper-text"
                onChange={(event) => {
                  handleUserStateChange(event);
                //   validateUsername(event);
                }}
                sx={{width: "30vh"}}
              />
              <FormHelperText id="username-helper-text">
                {validity.username
                  ? "Your username must be unique."
                  : "Other users will see this username."}
              </FormHelperText>
            </FormControl>

            <FormControl required>
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <Input
                name="password"
                id="password-input"
                aria-describedby="password-helper-text"
                onChange={handleUserStateChange}
                sx={{width: "30vh"}}
              />
              <FormHelperText id="password-helper-text">
                Password should include at least one number.
              </FormHelperText>
            </FormControl>

            <FormControl required>
              <InputLabel htmlFor="firstName-input">First Name</InputLabel>
              <Input
                name="firstName"
                id="firstName-input"
                aria-describedby="firstName-helper-text"
                onChange={handleUserStateChange}
                sx={{width: "30vh"}}
              />
            </FormControl>

            <FormControl required>
              <InputLabel htmlFor="lastName-input">Last Name</InputLabel>
              <Input
                name="lastName"
                id="lastName-input"
                aria-describedby="lastName-helper-text"
                onChange={handleUserStateChange}
                sx={{width: "30vh"}}
              />
            </FormControl>
            <FormControl error={validity.email} required>
              <InputLabel htmlFor="email-input">E-mail</InputLabel>
              <Input
                error={validity.email}
                name="email"
                id="email-input"
                aria-describedby="email-helper-text"
                onChange={(event) => {
                  handleUserStateChange(event);
                //   validateEmail(event);
                }}
                sx={{width: "30vh"}}
              />
              <FormHelperText id="email-helper-text">
                {validity.email
                  ? "This email address has already been used."
                  : "Please enter your email address."}
              </FormHelperText>
            </FormControl>

            <FormControl required>
              <InputLabel htmlFor="phoneNum-input">
                Phone Number
              </InputLabel>
              <Input
                name="phoneNum"
                id="phoneNum-input"
                aria-describedby="phoneNum-helper-text"
                onChange={handleUserStateChange}
                sx={{width: "30vh"}}
              />
              <FormHelperText id="phoneNum-helper-text">
                Please include area code.
              </FormHelperText>
            </FormControl>
            <FormControl required>
              <InputLabel shrink htmlFor="birthday-input">
                Birthday
              </InputLabel>
              <Input
                type="date"
                name="birthday"
                id="birthday-input"
                aria-describedby="birthday-helper-text"
                onChange={handleUserStateChange}
                sx={{width: "30vh"}}
              />
              <FormHelperText id="birthday-helper-text">
                Please provide your birth date.
              </FormHelperText>
            </FormControl>

            <FormControl required>
            <Input
                name="address"
                id="address-input"
                aria-describedby="address-helper-text"
                onChange={handleUserStateChange}
                sx={{width: "30vh"}}
              />
              <FormHelperText id="address-helper-text">
                Current home address.
              </FormHelperText>
            </FormControl>
          <Button
            size="small"
            onClick={handleSubmit}
            variant="contained"
            sx={{ my: 2, color: "secondary.light", display: "block" }}
            >
              Submit
          </Button>
        </form>
      </Container>
  );
};

export default NewUserForm;
