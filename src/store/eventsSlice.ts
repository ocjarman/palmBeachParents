import { createSlice } from "@reduxjs/toolkit";
import { EventType } from "../utils/interfaces";



interface initialStateType {
  events: EventType[]
  newEvent: EventType | {}
}

const initialState: initialStateType = {
  events: [],
  newEvent: {}
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setNewEvent: (state, action) => {
      state.newEvent = action.payload
    }
  },
});

export const { setEvents, setNewEvent } = eventsSlice.actions;
export default eventsSlice.reducer;