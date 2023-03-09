import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Typography, TextField, Paper } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { setEvents, setNewEvent } from "../../../store/eventsSlice";
import MenuItem from "@mui/material/MenuItem";
import {Input, FormControl, InputLabel} from "@mui/material";
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
      const { data: created } = await axios.post("/api/events/addEvent", newEvent);
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
              id="name"
              name="name"
              label="Event Title"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              required
              id="address"
              name="address"
              label="Event Address"
              variant="outlined"
              onChange={handleNewEvent}
            />
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
                
              />
              
            </FormControl>
            <TextField
              required
              id="time"
              name="time"
              label="Time"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              required
              id="description"
              name="description"
              label="description"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              required
              id="url"
              name="url"
              label="Link to Event"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              required
              id="hostName"
              name="hostName"
              label="Host Name Or Company"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              required
              id="hostPhone"
              name="hostPhone"
              label="Host Phone"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              required
              id="hostEmail"
              name="hostEmail"
              label="Host Email"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              variant="outlined"
              type="number"
              onChange={handleNewEvent}
            />
            <TextField
              required
              id="imageUrl"
              name="imageUrl"
              label="Image Url"
              variant="outlined"
              onChange={handleNewEvent}
            />
            <TextField
              id="select-recurring"
              select
              label="Recurring Event"
              // SelectProps={{
              //   native: true,
              // }}
              name="recurring"
              helperText="Is this a recurring event?"
              variant="outlined"
              onChange={handleNewEvent}
              defaultValue=''
            >
              <MenuItem value={'yes'}>
                  Yes
                </MenuItem>
              <MenuItem value={'no'}>
                  No
                </MenuItem>

            </TextField>
            <TextField
              id="select-category"
              select
              label="Category"
              defaultValue=''
              // SelectProps={{
              //   native: true,
              // }}
              helperText="What type of event is this?"
              name="category"
              variant="outlined"
              onChange={handleNewEvent}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              id="age"
              name="age"
              label="Ages"
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
          <Button variant="contained" onClick={handleSubmitNewEvent}>
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
