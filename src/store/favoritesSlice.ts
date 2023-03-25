import { createSlice } from "@reduxjs/toolkit";
import { FavType } from "../utils/interfaces";

interface initialStateType {
  favorites: FavType[];
}

const initialState: initialStateType = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { setFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;