import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setRecommendations } from "../../store/recommendationsSlice";

function GetRecommendations() {
  const recommendations = useSelector((state: RootState) => state.recommendations.recommendations)
  const dispatch = useDispatch();
  const getAllRecommendations = async () => {
    let response = await axios.get("/api/recommendations");
    dispatch(setRecommendations(response.data.businesses));
  };

  useEffect(() => {
    getAllRecommendations();
  }, []);
}

export default GetRecommendations;
