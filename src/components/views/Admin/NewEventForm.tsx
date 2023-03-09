import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Typography, TextField, Paper } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { setNewEvent } from "../../../store/eventsSlice";

const NewEventForm = () => {
  const newEvent = useSelector((state: RootState) => state.events.newEvent);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewEvent = (e: { target: any; }) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    dispatch(setNewEvent({ ...newEvent, [name]: value }));
  };

  const navAllEvents = () => navigate("/dashboard/events");

  const handleSubmitNewEvent = async (event: { preventDefault: () => void; }) => {
    try {
      event.preventDefault();
      // get token of logged in user
      const token = window.localStorage.getItem("token");
      // data to send to backend
      const tokenData = {
        headers: {
          authorization: token,
        },
      };
    //   const newEventData = {
    //     albumName: newEvent.albumName,
    //     artist: newEvent.artist,
    //     price: newEvent.price,
    //     year: newEvent.year,
    //     genre: newEvent.genre,
    //   };

    //   await axios.post(`/api/events/`, newEvent, tokenData);
    //   const allEvents = await axios.get(`/api/events/`, tokenData);
    //   dispatch(setEvents(allEvents.data));
      // navAllEvents();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Paper>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          placeSelf: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Typography sx={{ placeSelf: "center" }} variant={"h5"}>
          Add New Event
        </Typography>

        <Container
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            placeSelf: "center",
          }}
        >
          <form
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              placeSelf: "center",
            }}
          >
            <TextField
              required
              id="artist"
              name="artist"
              label="Artist Name"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              required
              id="albumName"
              name="albumName"
              label="Album Name"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              id="select-genre"
              select
              label="Genre"
              SelectProps={{
                native: true,
              }}
              name="genre"
              helperText="Select a genre"
              variant="outlined"
              onChange={handleNewEvent}
            >
            </TextField>
            <TextField
              required
              id="year"
              name="year"
              label="Year"
              variant="outlined"
              onChange={handleNewEvent}
            />
          </form>
        </Container>
        <Container
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubmitNewEvent}
          >
            Add Event
          </Button>
          <Button variant="contained" onClick={navAllEvents}>
            Cancel
          </Button>
        </Container>
      </Container>
    </Paper>
  );
};

export default NewEventForm;
