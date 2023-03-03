import * as React from "react";
import Button from "../CustomMUI/Button";
import Typography from "../CustomMUI/Typography";
import PageHeroLayout from "./PageHeroLayout";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function PageHero() {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);
  const loggedIn = user.id !== "" && user.id !== null;

  return (
    <PageHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
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
            color="secondary"
            variant="contained"
            size="large"
            component="a"
            onClick={() => navigate("/login")}
            sx={{ maxWidth: 200, margin: '1%' }}
          >
            Login
          </Button>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            component="a"
            // onClick={() => navigate('/login')}
            sx={{ minWidth: 200 }}
          >
            Create Account
          </Button>
          <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
            Discover the experience
          </Typography>
        </>
      )}
    </PageHeroLayout>
  );
}
