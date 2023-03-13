import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import AlertDialog from "./AlertDialog";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import {
  setEvents,
  setEventToEdit,
  setUpdatedEventInfo,
} from "../../../store/eventsSlice";
import { TextField, MenuItem } from "@mui/material";

const EditEventForm = () => {
  const eventToEdit = useSelector(
    (state: RootState) => state.events.eventToEdit
  );
  const updatedEventInfo = useSelector(
    (state: RootState) => state.events.updatedEventInfo
  );
  const events = useSelector((state: RootState) => state.events.events);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navAllEvents = () => navigate("/dashboard/events");

  const handleEventStateChange = (e: { target: any }) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    dispatch(setUpdatedEventInfo({ ...updatedEventInfo, [name]: value }));
  };

  // const handleDeleteEvent = async (event: { preventDefault: () => void; }) => {
  //   const response = confirm("are you sure you want to delete this event?");
  //   if (response === true) {
  //     try {
  //       event.preventDefault();
  //       // get token of logged in user
  //       const token = window.localStorage.getItem("token");
  //       // data to send to backend
  //       const tokenData = {
  //         headers: {
  //           authorization: token,
  //         },
  //       };
  //       // await axios.delete(`/api/events/${eventToEdit.id}`, tokenData);
  //       // update front end and redux store
  //       // dispatch(
  //       //   deleteevent({
  //       //     id: eventToEdit.id,
  //       //   })
  //       // );
  //       const allNewevents = await axios.get("/api/events");
  //       // dispatch(setevents(allNewevents.data));
  //       // dispatch(setEditInProgress(false));
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   } else {
  //     return;
  //   }
  // };
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
  const handleUpdateEvent = async (event: { preventDefault: () => void }) => {
    try {
      event.preventDefault();

      const updatedEventData = {
        id: updatedEventInfo.id || eventToEdit.id,
        name: updatedEventInfo.name || eventToEdit.name,
        address: updatedEventInfo.address || eventToEdit.address,
        date: updatedEventInfo.date || eventToEdit.date,
        time: updatedEventInfo.time || eventToEdit.time,
        description: updatedEventInfo.description || eventToEdit.description,
        url: updatedEventInfo.url || eventToEdit.url,
        hostName: updatedEventInfo.hostName || eventToEdit.hostName,
        hostPhone: updatedEventInfo.hostPhone || eventToEdit.hostPhone,
        hostEmail: updatedEventInfo.hostEmail || eventToEdit.hostEmail,
        price: updatedEventInfo.price || eventToEdit.price,
        imageUrl: updatedEventInfo.imageUrl || eventToEdit.imageUrl,
        recurring: updatedEventInfo.recurring || eventToEdit.recurring,
        category: updatedEventInfo.category || eventToEdit.category,
        age: updatedEventInfo.age || eventToEdit.age,
      };

      await axios.put(`/api/events`, updatedEventData);
        const allUpdatedEvents = await axios.get(`/api/events/`);
        dispatch(setEvents(allUpdatedEvents.data));
      navAllEvents();
    } catch (err) {
      console.log(err);
    }
  };

  const seeAllProducts = () => {
    // dispatch(setEditInProgress(false));
  };

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
        Edit Event
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
            name="name"
            label="Event Name"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={eventToEdit.name}
          />
          <TextField
            required
            name="address"
            label="Event Address"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={eventToEdit.address}
          />

          <TextField
            required
            name="time"
            label="Time of Event"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={eventToEdit.time}
          />
          <TextField
            required
            name="price"
            type="number"
            label="Price"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={Number(eventToEdit.price)}
          />
          <TextField
            required
            name="age"
            label="Recommended Ages"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={eventToEdit.age}
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
            name="description"
            label="Description"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={eventToEdit.description}
          />
          <TextField
            required
            name="url"
            label="Event Website"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={eventToEdit.url}
          />
          <TextField
            required
            name="hostName"
            label="Company/Organization/Host"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={eventToEdit.hostName}
          />
          <TextField
            required
            name="hostPhone"
            label="Event phone number"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={eventToEdit.hostPhone}
          />
          <TextField
            required
            name="hostEmail"
            label="Event email address"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={eventToEdit.hostEmail}
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
            name="imageUrl"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%" }}
            defaultValue={eventToEdit.imageUrl}
            label="Image URL"
          />
          <TextField
            select
            name="recurring"
            label="Is this a recurring event?"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%", width: "80%" }}
            defaultValue={eventToEdit.recurring || ''}
          >
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </TextField>
          <TextField
            select
            name="category"
            onChange={handleEventStateChange}
            sx={{ marginBottom: "5%", width: "80%" }}
            defaultValue={eventToEdit.category || ''}
            label="Category"
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
              aria-describedby="date-helper-text"
              onChange={handleEventStateChange}
              sx={{
                marginBottom: "5%",
                border: "1px solid lightGray",
                borderRadius: 1,
                padding: "5%",
                width: "200px",
              }}
              defaultValue={eventToEdit.date}
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
          onClick={handleUpdateEvent}
        >
          Update Event
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

export default EditEventForm;