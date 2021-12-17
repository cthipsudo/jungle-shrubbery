import React from "react";
import pfp from "../images/shiroi-white-trim.png"

const Profile = () => {
  return (
    <div id="profile" className="flex flex-col justify-center items-center">
      <img src={pfp}/>
      <h1 className="text-white text-xl font-bold"> @jungie_boi </h1>
    </div>
  );
}

export default Profile;