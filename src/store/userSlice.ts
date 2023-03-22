import { createSlice } from "@reduxjs/toolkit";
import { UserType, UserToEdit } from "../utils/interfaces";


interface initialStateType {
  user: UserType;
  userToEdit: UserToEdit;
  showUpdateForm: boolean;
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
    birthday: null,
    address: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: null
    },
    accountType: '',
    imageUrl: '',
    isAdmin: null,
    companyName: null,
  },
  userToEdit: {
    firstName: null,
    lastName: null,
    phoneNum: null,
    birthday: null,
    address: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: null
    },
    imageUrl: null,
    companyName: null,
  },
  showUpdateForm: false,
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
        birthday: null,
        address: {
          address1: '',
          address2: '',
          city: '',
          state: '',
          zipcode: null
        },
        accountType: '',
        imageUrl: '',
        isAdmin: null,
        companyName: null,
      };
    },
    setUserToEdit: (state, action) => {
      state.userToEdit = action.payload
    },
    setShowUpdateForm: (state, action) => {
      state.showUpdateForm = action.payload
    }
  },
});

export const { setUser, resetUser, setUserToEdit, setShowUpdateForm } = userSlice.actions;
export default userSlice.reducer;