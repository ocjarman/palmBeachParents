import React, { useState, BaseSyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../CustomMUI/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Typography from "../../CustomMUI/Typography";
import { RootState } from "../../../store";
import { setUser } from "../../../store/userSlice";
import { setNewUser } from "../../../store/newUserSlice";
import { useEffect } from "react";

const NewUserForm = () => {
  const { newUser } = useSelector((state: RootState) => state.newUser);
  const [validity, setValidity] = useState({ username: false, email: false });
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(true);
  const [address, setAddress] = useState({
    address1: null,
    address2: null,
    city: null,
    state: null,
    zipcode: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddressStateChange = (e: { target: any }) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setAddress({ ...address, [name]: value });
    dispatch(setNewUser({ ...newUser, ["address"]: address }));
  };
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
        dispatch(setNewUser({}));
        navigate("/");
      } catch (error) {
        alert('please check form input before submitting')
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
      const response = await axios.post("/api/user/emailAuth", {
        currentEmail,
      });
      const emailValid = response.status !== 200;
      setValidity({ ...validity, email: emailValid });
    } catch (error) {
      setValidity({ ...validity, email: true });
    }
  };

  useEffect(() => {
    if (!validity.username && !validity.email) {
      if (
        newUser.username &&
        newUser.password &&
        newUser.firstName &&
        newUser.lastName &&
        newUser.email &&
        newUser.phoneNum &&
        newUser.birthday &&
        newUser.address.address1 && newUser.address.city && newUser.address.state && newUser.address.zipcode
      ) {
        setButtonEnabled(false);
      } else {
        setButtonEnabled(true);
      }
    } else {
      setButtonEnabled(true);
    }
  }, [newUser, buttonEnabled, validity]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        placeSelf: "center",
        marginTop: "10%",
        border: '1px solid gray',
        borderRadius: 5,
        paddingTop: '3%',
      }}
    >
      <Typography sx={{ placeSelf: "center" }} variant={"h5"}>
        Join Palm Beach Parents
      </Typography>
      <form
        style={{ placeSelf: "center", alignItems: "center", display: 'flex', flexDirection: 'row'}}
      >
        <Container
          sx={{ display: "flex", flexDirection: 'column', justifyContent: "space-between", gap: 1 }}
        >
          <FormControl error={validity.username} required>
            <InputLabel htmlFor="username-input">Username</InputLabel>
            <Input
              type="text"
              name="username"
              id="username-input"
              required
              aria-describedby="username-helper-text"
              onChange={(event) => {
                handleUserStateChange(event);
                validateUsername(event);
              }}
              sx={{ width: "15vw" }}
            />
            <FormHelperText id="username-helper-text">
              {validity.username ? "Username must be unique." : null}
            </FormHelperText>
          </FormControl>
          <FormControl required sx={{}}>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input
              name="password"
              id="password-input"
              type="password"
              required
              autoComplete="current-password"
              aria-describedby="password-helper-text"
              onChange={handleUserStateChange}
              sx={{ width: "15vw" }}
            />
          </FormControl>
          <FormControl required sx={{}}>
            <InputLabel htmlFor="firstName-input">First Name</InputLabel>
            <Input
              type="text"
              name="firstName"
              id="firstName-input"
              required
              aria-describedby="firstName-helper-text"
              onChange={handleUserStateChange}
              sx={{ width: "15vw" }}
            />
          </FormControl>
          <FormControl required sx={{}}>
            <InputLabel htmlFor="lastName-input">Last Name</InputLabel>
            <Input
              type="text"
              name="lastName"
              id="lastName-input"
              required
              aria-describedby="lastName-helper-text"
              onChange={handleUserStateChange}
              sx={{ width: "15vw" }}
            />
          </FormControl>
        </Container>
        <Container
          sx={{ display: "flex", justifyContent: "space-between", gap: 1, flexDirection: 'column' }}
        >
          <FormControl error={validity.email} required>
            <InputLabel htmlFor="email-input">E-mail</InputLabel>
            <Input
              error={validity.email}
              name="email"
              type="email"
              id="email-input"
              required
              aria-describedby="email-helper-text"
              onChange={(event) => {
                handleUserStateChange(event);
                validateEmail(event);
              }}
              sx={{ width: "15vw" }}
            />
            <FormHelperText id="email-helper-text">
              {validity.email
                ? "Account with this email already exists."
                : null}
            </FormHelperText>
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="phoneNum-input">Phone Number</InputLabel>
            <Input
              type="tel"
              name="phoneNum"
              id="phoneNum-input"
              required
              aria-describedby="phoneNum-helper-text"
              onChange={handleUserStateChange}
              sx={{ width: "15vw" }}
            />
            <FormHelperText id="phoneNum-helper-text">
              Include area code.
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
              sx={{ width: "15vw" }}
            />
          </FormControl>
        </Container>

        <Container
          sx={{ display: "flex", justifyContent: "space-between", gap: 1, flexDirection: 'column', }}
        >
          <FormControl required>
            <InputLabel htmlFor="address-input">Street</InputLabel>
            <Input
              type="text"
              name="address1"
              id="address-input"
              required
              aria-describedby="address-helper-text"
              onChange={handleAddressStateChange}
              sx={{ width: "15vw" }}
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="address-input">Apt/Ste</InputLabel>

            <Input
              type="text"
              name="address2"
              aria-describedby="address-helper-text"
              onChange={handleAddressStateChange}
              sx={{ width: "15vw" }}
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="address-input">City</InputLabel>
            <Input
              type="text"
              name="city"
              aria-describedby="address-helper-text"
              onChange={handleAddressStateChange}
              sx={{ width: "15vw" }}
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="address-input">State</InputLabel>
            <Input
              type="text"
              name="state"
              aria-describedby="address-helper-text"
              onChange={handleAddressStateChange}
              sx={{ width: "15vw" }}
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="address-input">Zipcode</InputLabel>
            <Input
              type="number"
              name="zipcode"
              aria-describedby="address-helper-text"
              onChange={handleAddressStateChange}
              sx={{ width: "15vw" }}
            />
          </FormControl>
        </Container>
      </form>
        <Container
          sx={{ display: "flex", justifyContent: "space-between", gap: 1, flexDirection: 'column', }}
        >

        <Button
          size="small"
          onClick={handleSubmit}
          variant="contained"
          disabled={buttonEnabled}
          sx={{
            my: 2,
            color: "secondary.light",
            display: "block",
            maxWidth: "25vw",
            placeSelf: 'center'
          }}
        >
          Create Account
        </Button>
        </Container>
    </Container>
  );
};

export default NewUserForm;
