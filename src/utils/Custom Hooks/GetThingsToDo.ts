import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setThingsToDo } from "../../store/thingsToDoSlice";

function GetThingsToDo() {
  const thingsToDo = useSelector((state: RootState) => state.thingsToDo.thingsToDo)
  const dispatch = useDispatch();
  const getAllThingsToDo = async () => {
    let response = await axios.get("/api/thingsToDo");
    dispatch(setThingsToDo(response.data.businesses));
  };

  useEffect(() => {
    getAllThingsToDo();
  }, []);
}

export default GetThingsToDo;
