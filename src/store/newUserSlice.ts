import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../utils/interfaces";

interface NewUser {
  newUser: {
    username: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNum: string | null;
    birthday: string | null;
    address: string | null;
  }
}
// interface NewUser {
//   username: string | null;
//   password: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   email: string | null;
//   phoneNum: string | null;
//   birthday: string | null;
//   address: string | null;
// }

const initialState: NewUser = {
  newUser: {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: '',
    birthday: '',
    address: '',
  },
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
