import { createSlice } from "@reduxjs/toolkit";
import { RecType } from "../utils/interfaces";

interface initialStateType {
  recommendations: RecType[];
}

const initialState: initialStateType = {
  recommendations: [],
};

export const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {
    setRecommendations: (state, action) => {
      state.recommendations = action.payload;
    },
  },
});

export const { setRecommendations } =
  recommendationsSlice.actions;
export default recommendationsSlice.reducer;