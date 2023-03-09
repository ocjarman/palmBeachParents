import { createSlice } from "@reduxjs/toolkit";
import { EventType } from "../utils/interfaces";



interface initialStateType {
  events: EventType[]
}

const initialState: initialStateType = {
  events: []
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const { setEvents } = eventsSlice.actions;
export default eventsSlice.reducer;