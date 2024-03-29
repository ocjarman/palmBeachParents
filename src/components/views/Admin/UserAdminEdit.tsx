import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import Button from '../../CustomMUI/Button';
import Typography from "../../CustomMUI/Typography";


const UserAdminEdit = () => {
//   const userToCreate = useSelector((state) => state.userToCreate.userToCreate);
//   const users = useSelector((state) => state.adminUserList.users);
  const [currentUser, setCurrentUser] = useState([]);
  const [validity, setValidity] = useState({});
  const [editing, setEditing] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams().id;

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

  useEffect(() => {
    getUsers();
  }, []);

//   useEffect(() => {
//     setCurrentUser(users.filter((user) => user.id === params)[0]);
//   }, [users]);

  const handleEdittable = (e: { target: any; }) => {
    const target = e.target;
    const value = true;
    const name = target.name;
    setEditing({ ...editing, [name]: value });
  };

  const handleUserStateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    // dispatch(setUserToCreate({ ...userToCreate, [name]: value }));
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    if (!Object.values(validity).includes(true)) {
      try {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        const tokenData = {
          headers: {
            authorization: token,
          },
        };
        // const { data: created } = await axios.put("/api/user", userToCreate);
        // dispatch(setUser(created));
        // navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const validateUsername = async (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentUsername = event.target.value;
    // if (currentUser.username.toLowerCase() === currentUsername.toLowerCase()) {
    //   return setValidity({ ...validity, username: false });
    // }
    try {
      const response = await axios.post("/api/user/usernameAuth", {
        currentUsername,
      });

      const usernameValid = response.status !== 200;

      setValidity({ ...validity, username: usernameValid });
    } catch (error) {
      setValidity({ ...validity, username: true });
    }
  };

  const validateEmail = async (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentEmail = event.target.value;
    // if (currentUser.email.toLowerCase() === currentEmail.toLowerCase()) {
    //   return setValidity({ ...validity, email: false });
    // }
    try {
      const response = await axios.post("/api/user/userEmailAuth", {
        currentEmail,
      });

      const emailValid = response.status !== 200;

      setValidity({ ...validity, email: emailValid });
    } catch (error) {
      setValidity({ ...validity, email: true });
    }
  };

    // useEffect(() => {
    //   dispatch(setUserToCreate({ ...currentUser }));
    // }, [currentUser]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        placeSelf: "center",
        padding: "30px",
        marginTop: "30px",
        borderRadius: "5px",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{ placeSelf: "center", padding: "30px" }}
      >
        Your Account Information
      </Typography>
      <form className="form">
        <div className="userForm">
          {/* <FormControl error={validity.username} required> */}
          <FormControl required>
            <InputLabel shrink htmlFor="username-input">
              Your Username
            </InputLabel>
            <Input
            //   disabled={!editing?.username}
              onClick={handleEdittable}
            //   value={userToCreate?.username || ""}
              name="username"
              id="username-input"
              aria-describedby="username-helper-text"
              onChange={(event) => {
                handleUserStateChange(event);
                validateUsername(event);
              }}
            />
            {/* <FormHelperText id="username-helper-text">
              {validity.username
                ? "Your username must be unique."
                : "Other users will see this username."}
            </FormHelperText> */}
          </FormControl>

          <FormControl required>
            <InputLabel shrink htmlFor="password-input">
              Your Password
            </InputLabel>
            <Input
            //   disabled={!editing?.password}
              onClick={handleEdittable}
              defaultValue={"**********"}
              name="password"
              id="password-input"
              aria-describedby="password-helper-text"
              onChange={handleUserStateChange}
            />
            <FormHelperText id="password-helper-text">
              Your password should include a number.
            </FormHelperText>
          </FormControl>

          <FormControl required>
            <InputLabel shrink htmlFor="firstName-input">
              First Name
            </InputLabel>
            <Input
            //   disabled={!editing?.firstName}
              onClick={handleEdittable}
            //   value={userToCreate?.firstName || ""}
              name="firstName"
              id="firstName-input"
              aria-describedby="firstName-helper-text"
              onChange={handleUserStateChange}
            />
            <FormHelperText id="firstName-helper-text">
              Please enter your first name only.
            </FormHelperText>
          </FormControl>

          <FormControl required>
            <InputLabel shrink htmlFor="lastName-input">
              Last Name
            </InputLabel>
            <Input
            //   disabled={!editing?.lastName}
              onClick={handleEdittable}
            //   value={userToCreate?.lastName || ""}
              name="lastName"
              id="lastName-input"
              aria-describedby="lastName-helper-text"
              onChange={handleUserStateChange}
            />
            <FormHelperText id="lastName-helper-text">
              Please enter your last name only.
            </FormHelperText>
          </FormControl>
          {/* <FormControl error={validity.email} required> */}
          <FormControl required>
            <InputLabel shrink htmlFor="email-input">
              Your Email
            </InputLabel>
            <Input
            //   disabled={!editing?.email}
              onClick={handleEdittable}
            //   value={userToCreate?.email || ""}
              name="email"
              id="email-input"
              aria-describedby="email-helper-text"
              onChange={(event) => {
                handleUserStateChange(event);
                validateEmail(event);
              }}
            />
            {/* <FormHelperText id="email-helper-text">
              {validity.email
                ? "This email address has already been used."
                : "Please enter your email address."}
            </FormHelperText> */}
          </FormControl>

          <FormControl required>
            <InputLabel shrink htmlFor="phoneNum-input">
              Your Phone Number
            </InputLabel>
            <Input
            //   disabled={!editing?.phoneNum}
              onClick={handleEdittable}
            //   value={userToCreate?.phoneNum || ""}
              name="phoneNum"
              id="phoneNum-input"
              aria-describedby="phoneNum-helper-text"
              onChange={handleUserStateChange}
            />
            <FormHelperText id="phoneNum-helper-text">
              Please enter your phone number with area code.
            </FormHelperText>
          </FormControl>

          <FormControl required>
            <InputLabel shrink htmlFor="avatar-input">
              Your Avatar
            </InputLabel>
            <Input
            //   disabled={!editing?.imageUrl}
              onClick={handleEdittable}
            //   value={userToCreate?.imageUrl || ""}
              name="imageUrl"
              id="avatar-input"
              aria-describedby="avatar-helper-text"
              onChange={handleUserStateChange}
            />
            <FormHelperText id="avatar-helper-text">
              Please provide an avatar image URL for your avatar.
            </FormHelperText>
          </FormControl>
          <FormControl required>
            <InputLabel shrink htmlFor="birthday-input">
              Birthday
            </InputLabel>
            <Input
            //   disabled={!editing?.birthday}
              onClick={handleEdittable}
            //   value={userToCreate?.birthday?.split("T")[0] || ""}
              type="date"
              name="birthday"
              id="birthday-input"
              aria-describedby="birthday-helper-text"
              onChange={handleUserStateChange}
            />
            <FormHelperText id="birthday-helper-text">
              Please provide your birth date.
            </FormHelperText>
          </FormControl>

          <FormControl required>
            <FormHelperText id="address-helper-text">
              Please provide your current address.
            </FormHelperText>
          </FormControl>
        </div>
        <Button
          size="large"
          sx={{ width: "20vw", height: "10vh" }}
          onClick={handleSubmit}
          variant="contained"
        >
          <Typography
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              letterSpacing: ".2rem",
            }}
            variant={"h4"}
          >
            Submit
          </Typography>
        </Button>
      </form>
    </Container>
  );
};

export default UserAdminEdit;
