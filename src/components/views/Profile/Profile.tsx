import React from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import Button from '../../CustomMUI/Button'
import './profile.css'
import UpdateUserInfoForm from "./UpdateUserInfoForm";
import { setShowUpdateForm } from "../../../store/userSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const  user = useSelector((state: RootState) => state.user.user);
  const showUpdateForm  = useSelector((state: RootState) => state.user.showUpdateForm);
  const dispatch = useDispatch()

  return (
    <div className="profilePage">
      <h1 className="profileHeader">{user.username}'s Profile</h1>
      <div className="userInfo">
        <img src={`${user.avatarUrl}`} alt="profile picture" className="profilePicture"></img>
        <p>Username: {user.username}</p>
        <p>Name: {user.fullName}</p>
        <p>Account Type: {user.accountType}</p>
      </div>
      <div className="userContactInfo">
        <p>Phone number: {user.phoneNum}</p>
        <p>E-mail Address: {user.email}</p>
        <p>Birthday: {user.birthday}</p>
        <p>Mailing Address: {user.address}</p>
        <p>Company Name: {user.companyName ? `${user.companyName}` : 'not listed'}</p>
           <Button
            size="small"
            onClick={() => dispatch(setShowUpdateForm(true))}
            variant="contained"
            sx={{ my: 2, color: "secondary.light", display: "block" , maxWidth: '25vw'}}
            >Edit Personal Info
            </Button>
      </div>
      {showUpdateForm && <UpdateUserInfoForm/>}
    </div>
  );
};

export default Profile;
