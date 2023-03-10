import { createSlice } from "@reduxjs/toolkit";


export interface UserType {
  id: string;
  username: string;
  password: string | null;
  fullName: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNum: string | null;
  birthday: string | null;
  address: string | null;
  accountType: string | null;
  avatarUrl: string | null;
  isAdmin: boolean | null;
  companyName: string | null;
}

interface initialStateType {
allUsers: UserType[] | [];
}

const initialState: initialStateType = {
allUsers: [],
};

export const userSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { setAllUsers } = userSlice.actions;
export default userSlice.reducer;