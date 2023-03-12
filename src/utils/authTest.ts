import axios from "axios";
import { redirect } from "react-router-dom";

const authTest = async () => {
  console.log('hitting auth test')
  try {
    // Grab token off of localstorage
    const token = window.localStorage.getItem("token");
    console.log(token)

    // Pass token over to the back-end
    const res = await axios.get("/api/auth/authTest", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    console.log('status', res)

    if (res.status !== 200) {
      console.log('status', res.status)
      throw redirect("/login");
    }
    return true;
  } catch (error) {
    console.log('error', error)
    throw redirect("/login");
  }
};

export default authTest;
