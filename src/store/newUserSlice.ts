import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  newUser: {};
}

const initialState: initialStateType = {
  newUser: {},
};

export const newUserSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    setNewUser: (state, action) => {
      state.newUser = action.payload;
    },
  },
});

export const { setNewUser } = newUserSlice.actions;
export default newUserSlice.reducer;
