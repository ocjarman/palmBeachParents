import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setRecCategories } from "../../store/recommendationsSlice";

function GetRecommendations() {
  const dispatch = useDispatch();
  const getAllRecommendations = async () => {
    let categories = await axios.get("/api/recommendations/");
    dispatch(setRecCategories(categories.data));
  };

  useEffect(() => {
    getAllRecommendations();
  }, []);
}

export default GetRecommendations;
