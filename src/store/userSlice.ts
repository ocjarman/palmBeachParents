import { createSlice } from "@reduxjs/toolkit";

export interface userType {
  id: string | null;
  username: string | null;
  address: string | null;
  fullName: string | null;
  password: string | null;
  firstName: string | null;
  lastName: string | null;
  phoneNum: string | null;
  email: string | null;
  birthday: Date | null;
  avatarUrl: string | null;
  isAdmin: boolean | null;
}

interface initialStateType {
  user: userType;
}

const initialState: initialStateType = {
  user: {
    id: null,
  username: null,
  address: null,
  fullName: null,
  password: null,
  firstName: null,
  lastName: null,
  phoneNum: null,
  email: null,
  birthday: null,
  avatarUrl: null,
  isAdmin: null,
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
    resetUser: (state, action) => {
      state.user = {
        id: null,
        username: null,
        firstName: null,
        lastName: null,
        fullName: null,
        address: null,
        password: null,
        phoneNum: null,
        email: null,
        birthday: null,
        avatarUrl: null,
        isAdmin: false,
      };
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;