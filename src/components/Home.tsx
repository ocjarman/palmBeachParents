import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../store/userSlice";
import { RootState } from "../store";
import axios from "axios";
import Typography from "./CustomMUI/Typography";
import { Container } from "@mui/system";

const Home = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();


  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser());
  };

  const testAuth = async () => {
    // grab token off local storage
    const token = window.localStorage.getItem('token')
    // pass token over to backend
    const response = await axios.get('/api/auth/authTest', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log("RES", response)
  }

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}} maxWidth={false}>
      <Typography sx={{ placeSelf: "center", margin: '3%' }} variant={"h2"}>Home</Typography>
      <Container sx={{display: 'flex', flexWrap: 'wrap', gap: 3, alignContent: 'center', justifyContent: 'center'}} maxWidth={false}>
       //HOME INFO HERE
      </Container>
    </Container>
  );
};

export default Home;
