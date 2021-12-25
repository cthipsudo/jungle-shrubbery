import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import FFXIVServices from "../services/FFXIV-services";
import Loader from "./Loader";

function FFXIVbox() {
  const [data, setData] = useState({});
  const [dataGrabbed, setDataGrabbed] = useState(false);
  const [character, setCharacter] = useState({});
  const [title, setTitle] = useState("");
  const [className, setClassName] = useState("");
  const [classUrl, setClassUrl] = useState("");

  let apiCall = false;
  // Grab API
  useEffect(() => {
    if (!apiCall) {
      FFXIVServices.grabFFXIVChar().then((data) => {
        setData(data);
        setCharacter(data.Character);
        setClassName(data.Character.ActiveClassJob.UnlockedState.Name);
        FFXIVServices.grabCharTitle(data.Character.Title).then((data) => {
          setTitle(data.Name);
        });
        FFXIVServices.grabCharJobIcon(data.Character.ActiveClassJob.JobID).then(
          (data) => {
            let endpoint = data.Results[0].Icon.replace("/1/", "/companion/");
            setClassUrl(`https://xivapi.com/${endpoint}`);
          }
        );
        setDataGrabbed(true);
      });
    }
    return () => (apiCall = true);
  }, []);

  // Use a loader while api is grabbed...
  if (!dataGrabbed)
    return (
      <div className="flex flex-col items-center">
        <Loader />
        <div className="text-white text-center pt-20 text-2xl">
          (if this is taking too long), <br /> FFXIV probably disabled the
          request for a bit, <br />
          check back in an hour!
        </div>
      </div>
    );

  // API is grabbed, lets goo
  return (
    <div
      id="ffxiv"
      className="ffxiv-wrapper flex flex-col items-center text-white text-left p-5 md:p-10 md:self-stretch md:justify-evenly animate__animated animate__zoomIn"
    >
      <h2 className=" font-bold self-start text-2xl mb-2">My Other Half</h2>
      <div className="border-wrapper w-full p-2 bg-white text-zinc-400">
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col">
            <h3 className="font-bold text-black">{character.Name}</h3>
            <h4 className="">
              {character.Server} ({character.DC})
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <h3 className="text-black uppercase font-bold">{className}</h3>
              <h4>Level {character.ActiveClassJob.Level}</h4>
            </div>
            <img className="classIcon" src={classUrl} alt="ffxiv-class-icon" />
          </div>
        </div>
        <img
          className="w-full my-2"
          src={character.Portrait}
          alt="ffxiv-character-portrait"
        />
        <div className="flex items-center info-color-hover w-max">
          <FontAwesomeIcon className="" icon={faAngleDoubleRight} />
          <a
            target="_blank"
            href="https://na.finalfantasyxiv.com/lodestone/character/30983517/"
          >
            <h3 className="info-check">Need more info?</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FFXIVbox;
