import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  recommendations: [];
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