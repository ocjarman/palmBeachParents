import { createSlice } from "@reduxjs/toolkit";

interface UserType {
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
  user: UserType;
}

const initialState: initialStateType = {
  user: {
    id: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    phoneNum: '',
    birthday: '',
    address: '',
    accountType: '',
    avatarUrl: '',
    isAdmin: null,
    companyName: '',
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = {
        id: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        fullName: '',
        email: '',
        phoneNum: '',
        birthday: '',
        address: '',
        accountType: '',
        avatarUrl: '',
        isAdmin: null,
        companyName: '',
      };
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;