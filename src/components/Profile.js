import React from "react";
import pfp from "../images/shiroi-white-trim.png";

const Profile = () => {
  function hoverImage(e) {
    //console.log(e.target);
    const el = e.target;
  }
  return (
    <div id="profile" className="flex flex-col justify-center items-center ">
      <div className="hov-wrapper flex flex-col items-center">
        <img
          className=" animate__animated animate__fadeIn"
          onMouseOver={hoverImage}
          src={pfp}
        />
        <h1 className="text-white text-xl font-bold animate__animated animate__fadeIn">
          {" "}
          @jungie_boi{" "}
        </h1>
      </div>
    </div>
  );
};

export default Profile;
