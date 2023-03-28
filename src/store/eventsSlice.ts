import { createSlice } from "@reduxjs/toolkit";
import { EventType, LocationType } from "../utils/interfaces";

interface initialStateType {
  events: EventType[];
  newEvent: EventType | {};
  eventToEdit: EventType;
  updatedEventInfo: EventType;
}

const initialState: initialStateType = {
  events: [],
  newEvent: {},
  eventToEdit: {
    id: '',
    name: '',
    category: '',
    cost: '',
    location: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip_code: '',
      display_address: []
    },
    description: '',
    is_free: false,
    event_site_url: '',
    tickets_url: '',
    time_start: null,
    time_end: null,
    image_url: '',
  },
  updatedEventInfo: {
      name: null,
      category: null,
      cost: null,
      location: {
        address1: null,
        address2: null,
        city: null,
        state: null,
        zip_code: null,
        display_address: []
      },
      description: null,
      is_free: false,
      event_site_url: null,
      tickets_url: null,
      time_start: null,
      time_end: null,
      image_url: null,
  },
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setNewEvent: (state, action) => {
      state.newEvent = action.payload;
    },
    setEventToEdit: (state, action) => {
      state.eventToEdit = action.payload;
    },
    setUpdatedEventInfo: (state, action) => {
      state.updatedEventInfo = action.payload;
    },
  },
});

export const { setEvents, setNewEvent, setEventToEdit, setUpdatedEventInfo } =
  eventsSlice.actions;
export default eventsSlice.reducer;