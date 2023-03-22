import { createSlice } from "@reduxjs/toolkit";
import { RecType } from "../utils/interfaces";

interface initialStateType {
  thingsToDo: RecType[];
}

const initialState: initialStateType = {
  thingsToDo: [],
};

export const thingsToDoSlice = createSlice({
  name: "thingsToDo",
  initialState,
  reducers: {
    setThingsToDo: (state, action) => {
      state.thingsToDo = action.payload;
    },
  },
});

export const { setThingsToDo } =
  thingsToDoSlice.actions;
export default thingsToDoSlice.reducer;