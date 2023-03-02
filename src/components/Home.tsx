import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../store/userSlice";
import { RootState } from "../store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser({}));
    navigate("/");
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
    <div>
      <h1>Home</h1>
      <div>
        <p>Welcome {user.username}!!</p>
        <button onClick={logout}>Logout</button>
        <button onClick={testAuth}>Test Auth</button>
      </div>
    </div>
  );
};

export default Home;
