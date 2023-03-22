import React, { useEffect } from "react";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import ResponsiveAppBar from "./Navbar/ResponsiveAppBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import GetEvents from "../utils/Custom Hooks/GetEvents";
import { Outlet } from "react-router-dom";
import AdminGetUsers from "../utils/Custom Hooks/AdminGetUsers";
import GetThingsToDo from "../utils/Custom Hooks/GetThingsToDo";

const App = () => {
  const dispatch = useDispatch();

  const loginWithToken = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });
      dispatch(setUser(response.data));
    }
  };

  useEffect(() => {
    loginWithToken();
  }, []);

  // custom hooks
  GetEvents();
  AdminGetUsers();
  GetThingsToDo();

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
