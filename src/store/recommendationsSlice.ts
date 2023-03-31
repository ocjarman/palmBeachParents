import { createSlice } from "@reduxjs/toolkit";
import { RecType, RecCategoryType } from "../utils/interfaces";

interface initialStateType {
  recCategories: RecCategoryType[];
  recommendations: RecType | {}
}

const initialState: initialStateType = {
  recCategories: [],
  recommendations: {},
};

export const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {
    setRecCategories: (state, action) => {
      state.recCategories = action.payload;
    },
    setRecommendations: (state, action) => {
      state.recommendations = action.payload;
    },
  },
});

export const { setRecCategories, setRecommendations } =
  recommendationsSlice.actions;
export default recommendationsSlice.reducer;