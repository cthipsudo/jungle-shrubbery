import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react/cjs/react.production.min";
import FFXIVServices from "../services/FFXIV-services";
import Loader from "./Loader";

class FFXIVbox extends Component {
  state = {
    data: {},
    dataGrabbed: false,
    title: "",
    className: "",
    classUrl: "",
  };

  componentDidMount() {
    const data = FFXIVServices.grabFFXIVChar();
    data.then((data) => {
      const titleData = FFXIVServices.grabCharTitle(data.Character.Title);
      titleData.then((data) => {
        this.setState({
          title: data.Name,
        });
      });
      const jobIcon = FFXIVServices.grabCharJobIcon(
        data.Character.ActiveClassJob.JobID
      );
      jobIcon.then((data) => {
        let endpoint = data.Results[0].Icon.replace("/1/", "/companion/");
        this.setState({
          classUrl: `https://xivapi.com/${endpoint}`,
        });
      });
      this.setState((prevState) => ({
        data: data,
        className: data.Character.ActiveClassJob.UnlockedState.Name,
        dataGrabbed: !prevState.dataGrabbed,
      }));
    });
  }

  render() {
    // Use a loader while api is grabbed...
    if (!this.state.dataGrabbed)
      return (
        <div className="flex flex-col items-center">
          <Loader />
        </div>
      );
    const { Character } = this.state.data;
    const { classUrl, className } = this.state;

    return (
      <div
        id="ffxiv"
        className="ffxiv-wrapper flex flex-col items-center text-white text-left p-5 md:p-10 md:self-stretch md:justify-evenly animate__animated animate__zoomIn"
      >
        <h2 className=" font-bold self-start text-2xl mb-2">My Other Half</h2>
        <div className="border-wrapper w-full p-2 bg-white text-zinc-400">
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col">
              <h3 className="font-bold text-black">{Character.Name}</h3>
              <h4 className="">
                {Character.Server} ({Character.DC})
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <h3 className="text-black uppercase font-bold">{className}</h3>
                <h4>Level {Character.ActiveClassJob.Level}</h4>
              </div>
              <img className="classIcon" src={classUrl} />
            </div>
          </div>
          <img className="w-full my-2" src={Character.Portrait} />
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
}

export default FFXIVbox;
