import React from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
const Profile = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Name: {user.fullName}</p>
      <p>Account Type: {user.accountType}</p>
      <p>Phone number: {user.phoneNum}</p>
      <p>E-mail Address: {user.email}</p>
      <p>Birthday: {user.birthday}</p>
      <p>Mailing Address: {user.address}</p>
      <p>Profile photo: {user.avatarUrl}</p>
      <p>Company Name: {user.companyName}</p>
    </Container>
  );
};

export default Profile;
