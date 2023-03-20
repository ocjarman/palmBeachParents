import { createSlice } from "@reduxjs/toolkit";


export interface UserType {
    id?: string;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    accountType?: string;
    phoneNum: string;
    email: string;
    birthday: Date;
    address: string;
    imageUrl: string | null;
    isAdmin?: boolean;
    companyName?: string | null;
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