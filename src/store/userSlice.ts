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

interface UserToEdit {
  firstName: string | null;
  lastName: string | null;
  phoneNum: string | null;
  birthday: string | null;
  address: string | null;
  avatarUrl: string | null;
  companyName: string | null;
}

interface initialStateType {
  user: UserType;
  userToEdit: UserToEdit;
  showUpdateForm: boolean;
  isLoggedIn: boolean;
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
    companyName: null,
  },
  userToEdit: {
    firstName: null,
    lastName: null,
    phoneNum: null,
    birthday: null,
    address: null,
    avatarUrl: null,
    companyName: null,
  },
  showUpdateForm: false,
  isLoggedIn: false,
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
        companyName: null,
      };
    },
    setUserToEdit: (state, action) => {
      state.userToEdit = action.payload
    },
    setShowUpdateForm: (state, action) => {
      state.showUpdateForm = action.payload
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
  },
});

export const { setUser, resetUser, setUserToEdit, setShowUpdateForm, setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;