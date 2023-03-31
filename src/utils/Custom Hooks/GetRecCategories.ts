import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setRecCategories } from "../../store/recommendationsSlice";

function GetRecommendations() {
  const recCategories = useSelector((state: RootState) => state.recommendations.recCategories)
  const dispatch = useDispatch();
  const getAllRecommendations = async () => {
    let categories = await axios.get("/api/recommendations/categories");
    dispatch(setRecCategories(categories.data));
  };

  useEffect(() => {
    getAllRecommendations();
  }, []);
}

export default GetRecommendations;
