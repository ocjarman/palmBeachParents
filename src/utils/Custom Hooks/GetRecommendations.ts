import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRecommendations } from "../../store/recommendationsSlice";

function GetRecommendations() {
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
