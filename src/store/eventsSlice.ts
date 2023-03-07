import { createSlice } from "@reduxjs/toolkit";


export interface EventType {
  id: string;
  contactEmail: string | null;
  contactName: string | null;
  cost: number | null;
  eventAddress: string | null;
  eventDate: string | null;
  eventName: string | null;
  imageUrl: string | null;
  recurring: boolean | null;
}

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