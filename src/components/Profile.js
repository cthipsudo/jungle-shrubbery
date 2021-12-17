import React from "react";
import pfp from "../img/shiroi.png"

const Profile = () => {
  return (
    <div id="profile" className="flex flex-col justify-center content-center text-center">
      <img src={pfp}/>
      <h1 className="text-white"> @jungie_boi </h1>
    </div>
  );
}

export default Profile;