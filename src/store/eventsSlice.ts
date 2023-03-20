import { createSlice } from "@reduxjs/toolkit";
import { EventType } from "../utils/interfaces";

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
    name: null,
    address: null,
    date: null,
    time: null,
    description: null,
    webUrl: null,
    hostName: null,
    hostPhone: null,
    hostEmail: null,
    price: null,
    imageUrl: null,
    recurring: null,
    category: null,
    age: null,
    users: null
  },
  updatedEventInfo: {
    name: null,
    address: null,
    date: null,
    time: null,
    description: null,
    webUrl: null,
    hostName: null,
    hostPhone: null,
    hostEmail: null,
    price: null,
    imageUrl: null,
    recurring: null,
    category: null,
    age: null,
    users: null
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