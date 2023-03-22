import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../store/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../../CustomMUI/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import './login.css'
import Box from "@mui/material/Box"
import { RootState } from "../../../store";
import  Typography  from "../../CustomMUI/Typography";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";
const Login = () => {
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onChange = (ev: { target: { name: any; value: any } }) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  const loginWithToken = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });
      dispatch(setUser(response.data));
      navigate("/");
      window.location.reload();
    } else {
      console.log("no token");
      navigate('/');
    }
  };

  const attemptLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth", credentials);
      const token = response.data;
      // token is stable to current user
      window.localStorage.setItem("token", token);
      loginWithToken();
    } catch {
      console.log("user not authenticated");
    }
  };


  return (
    <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh', justifyContent: "space-between"}}>
      <Box boxShadow={3} sx={{padding: '5%', textAlign: 'center'}}>
      <Typography sx={{ placeSelf: "center" }} variant={"h5"}>
          Login to Palm Beach Parents
        </Typography>
      <form onSubmit={attemptLogin} className="loginForm">
        <FormControl required>
          <TextField
            placeholder="username"
            value={credentials.username}
            name="username"
            onChange={onChange}
            sx={{ width: "30vh", marginTop: '5%', marginBottom: '1%' }}
          />
        </FormControl>
        <FormControl required>
          <TextField
            placeholder="password"
            name="password"
            required
            type="password"
            value={credentials.password}
            autoComplete="current-password"
            onChange={onChange}
            sx={{ width: "30vh", marginBottom: '5%', marginTop: '1%' }}
          />
        </FormControl>
        <Button
          variant="contained"
          size="small"
          onClick={attemptLogin}
          sx={{ my: 2, color: "secondary.light", display: "block" , maxWidth: '25vw'}}
          >
          Login
        </Button>
      </form>
      </Box>
   </Container>
  );
};

export default Login;
