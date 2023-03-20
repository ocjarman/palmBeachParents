import React from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import Button from "../../CustomMUI/Button";
import Typography from "../../CustomMUI/Typography";
import "./profile.css";
import UpdateUserInfoForm from "./UpdateUserInfoForm";
import { setShowUpdateForm } from "../../../store/userSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const showUpdateForm = useSelector(
    (state: RootState) => state.user.showUpdateForm
  );
  const dispatch = useDispatch();

  return (
    <> 
    {!showUpdateForm && (
        <div className="profilePage">
          <Typography className="profileHeader" variant={"h3"}>
            {user.username}'s Profile
          </Typography>
          <div className="userInfo">
          <img
            src={`${user.imageUrl}`}
            alt="profile picture"
            className="profilePicture"
          ></img>
            <Typography className="profileHeader" variant={"body1"}>
              Username: {user.username}
            </Typography>
            <Typography className="profileHeader" variant={"body1"}>
              Name: {user.fullName}
            </Typography>
            <Typography className="profileHeader" variant={"body1"}>
              Account Type: {user.accountType}
            </Typography>
          </div>
          <div className="userContactInfo">
            <Typography className="profileHeader" variant={"body1"}>
              Phone number: {user.phoneNum}
            </Typography>
            <Typography className="profileHeader" variant={"body1"}>
              E-mail Address: {user.email}
            </Typography>
            <Typography className="profileHeader" variant={"body1"}>
              <>
              Birthday: {user.birthday}
              </>
            </Typography>
            <Typography className="profileHeader" variant={"body1"}>
              Mailing Address: {user.address}
            </Typography>
            <Typography className="profileHeader" variant={"body1"}>
              Company Name: {user.companyName ? user.companyName : "not listed"}
            </Typography>
            <Button
              size="small"
              onClick={() => dispatch(setShowUpdateForm(true))}
              variant="contained"
              sx={{
                my: 2,
                color: "secondary.light",
                display: "block",
                maxWidth: "25vw",
              }}
            >
              Edit Personal Info
            </Button>
          </div>
          </div>
      )}
      {showUpdateForm && <UpdateUserInfoForm />}
    </>
  );
};

export default Profile;
