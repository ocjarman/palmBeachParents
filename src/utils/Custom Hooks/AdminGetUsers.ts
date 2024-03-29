import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setAllUsers } from "../../store/allUsersSlice";

function AdminGetUsers() {
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch();
  
  const getAllUsers = async () => {
    if (user.isAdmin) {
        const response = await axios.post(`/api/allUsers`, {userId: user.id});
        dispatch(setAllUsers(response.data))
    } else {
        console.log('not an admin, not setting users')
    }
}

  useEffect(() => {
    getAllUsers();
  }, [user]);
}

export default AdminGetUsers;
