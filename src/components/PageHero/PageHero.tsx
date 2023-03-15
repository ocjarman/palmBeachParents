import * as React from "react";
import Button from "../CustomMUI/Button";
import Typography from "../CustomMUI/Typography";
import PageHeroLayout from "./PageHeroLayout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import axios from "axios";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function PageHero() {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);
  const loggedIn = user.id !== "" && user.id !== null;

  // const config = {
   
  //   params: {
  //     term: "restaurants",
  //     location: 'toronto',
  //     radius: 1609,
  //     sort_by: "rating",
  //     limit: 50,
  //   },
  // };

  // const testTheYelp = async () => {
  //   let response = await axios.get(`/api/recommendations`)
  //   console.log({response})
  // }



  return (
    <PageHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Palm Beach Parents
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Events & Resources for families in the South Florida Area
      </Typography>
      {!loggedIn && (
        <>
          <Button
            color="inherit"
            variant="contained"
            size="large"
            onClick={() => navigate("/login")}
            sx={{ maxWidth: 200, margin: "1%" }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            variant="contained"
            size="large"
            onClick={() => navigate("/newUser")}
            sx={{ minWidth: 200 }}
          >
            Create Account
          </Button>
        </>
      )}
    </PageHeroLayout>
  );
}
