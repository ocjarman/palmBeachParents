import axios from "axios";
import { redirect } from "react-router-dom";

const adminTest = async () => {
  try {
    // Grab token off of localstorage
    const token = window.localStorage.getItem("token");

    // Pass token over to the back-end to check if user is admin
    const res = await axios.get("/api/auth/adminTest", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });


    if (res.status !== 200) {
      throw redirect("/404");
    }
    if (!res.data.isAdmin) {
      throw redirect("/404");
    }
    return true;
  } catch (error) {
    throw redirect("/");
  }
};

export default adminTest;
