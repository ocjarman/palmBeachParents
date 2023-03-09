import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEvents } from "../../store/eventsSlice";

function GetEvents() {
  const dispatch = useDispatch();
  const getAllEvents = async () => {
    let response = await axios.get("/api/events");
    dispatch(setEvents(response.data));
  };

  useEffect(() => {
    getAllEvents();
  }, []);
}

export default GetEvents;
