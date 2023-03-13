import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./CustomMUI/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import './login.css'
import Box from "@mui/material/Box"
import { RootState } from "../store";

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
    // authenticating with backend
    try {
      const response = await axios.post("/api/auth", credentials);
      const token = response.data;
      // token is stable to current user
      console.log(token);
      window.localStorage.setItem("token", token);
      loginWithToken();
    } catch {
      console.log("user not authenticated");
    }
  };


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20%'}}>
      <Box boxShadow={3} sx={{padding: '5%', textAlign: 'center'}}>
      <h2>Login</h2>
      <form onSubmit={attemptLogin} className="loginForm">
        <FormControl required>
          <Input
            placeholder="username"
            value={credentials.username}
            name="username"
            onChange={onChange}
            sx={{ width: "30vh" }}
          />
        </FormControl>
        <FormControl required>
          <Input
            placeholder="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            sx={{ width: "30vh", marginTop: '2%'  }}
          />
        </FormControl>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          component="a"
          onClick={attemptLogin}
          sx={{ maxWidth: 200, marginTop: '2%' }}
        >
          Login
        </Button>
      </form>
      </Box>
    </div>
  );
};

export default Login;
