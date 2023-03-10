import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { setEvents, setNewEvent } from "../../../store/eventsSlice";
import MenuItem from "@mui/material/MenuItem";
import { Input, FormControl, InputLabel, TextField } from "@mui/material";
import Button from "../../CustomMUI/Button";
import Typography from "../../CustomMUI/Typography";

const NewEventForm = () => {
  const newEvent = useSelector((state: RootState) => state.events.newEvent);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewEvent = (e: { target: any }) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    dispatch(setNewEvent({ ...newEvent, [name]: value }));
  };

  const navAllEvents = () => navigate("/dashboard/events");

  const handleSubmitNewEvent = async (event: {
    preventDefault: () => void;
  }) => {
    try {
      event.preventDefault();
      const { data: created } = await axios.post(
        "/api/events/addEvent",
        newEvent
      );
      dispatch(setEvents(created));
      dispatch(setNewEvent({}));
      navAllEvents();
    } catch (error) {
      console.error(error);
    }
  };

  const categories = [
    {
      value: "outdoor activity",
      label: "outdoor activity",
    },
    {
      value: "Arts And Crafts",
      label: "Arts And Crafts",
    },
    {
      value: "Health And Wellness",
      label: "Health And Wellness",
    },
    {
      value: "Food or Restaurant Related",
      label: "Food or Restaurant Related",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        placeSelf: "center",
        padding: "20px",
        border: "1px solid gray",
      }}
    >
      <Typography sx={{ placeSelf: "center" }} variant={"h5"}>
        Add New Event
      </Typography>

      <form
        style={{
          gap: "20px",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Container
          sx={{
            margin: "1%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            required
            id="name"
            name="name"
            label="Event Title"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />
          <TextField
            required
            id="address"
            name="address"
            label="Event Address"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />

          <TextField
            required
            id="time"
            name="time"
            label="Time"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            type="number"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />
          <TextField
            required
            id="age"
            name="age"
            label="Ages"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />
        </Container>
        <Container
          sx={{
            margin: "1%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />
          <TextField
            required
            id="url"
            name="url"
            label="Link to Event"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />
          <TextField
            required
            id="hostName"
            name="hostName"
            label="Host Name Or Company"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />
          <TextField
            required
            id="hostPhone"
            name="hostPhone"
            label="Host Phone"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />
          <TextField
            required
            id="hostEmail"
            name="hostEmail"
            label="Host Email"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />
        </Container>
        <Container
          sx={{
            margin: "1%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            required
            id="imageUrl"
            name="imageUrl"
            label="Image Url"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%" }}
          />
          <TextField
            id="select-recurring"
            select
            label="Recurring Event"
            name="recurring"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%", width: "80%" }}
            defaultValue=""
          >
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </TextField>
          <TextField
            id="select-category"
            select
            label="Category"
            defaultValue=""
            name="category"
            onChange={handleNewEvent}
            sx={{ marginBottom: "5%", width: "80%" }}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl required>
            <InputLabel shrink htmlFor="birthday-input">
              Date
            </InputLabel>
            <Input
              type="date"
              name="date"
              id="date-input"
              aria-describedby="date-helper-text"
              onChange={handleNewEvent}
              sx={{
                marginBottom: "5%",
                border: "1px solid lightGray",
                borderRadius: 1,
                padding: "5%",
                width: "200px",
              }}
            />
          </FormControl>
        </Container>
      </form>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
        }}
      >
        <Button
          color="secondary"
          variant="contained"
          size="small"
          component="button"
          onClick={handleSubmitNewEvent}
        >
          Add Event
        </Button>
        <Button
          color="secondary"
          variant="contained"
          size="small"
          component="button"
          onClick={navAllEvents}
        >
          Cancel
        </Button>
      </Container>
    </Container>
  );
};

export default NewEventForm;
