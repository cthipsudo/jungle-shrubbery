import React from "react";
import { Component } from "react/cjs/react.production.min";
import FFXIVServices from "../services/FFXIV-services";
import Loader from "./Loader";

class FFXIVbox extends Component {
  state = {
    data: {},
    dataGrabbed: false,
  };

  componentDidMount() {
    const data = FFXIVServices.grabFFXIVChar();
    data.then((data) => {
      const titleData = FFXIVServices.grabCharTitle(data.Character.Title);
      titleData.then(data => {
        console.log(data.Results[0]);
      });
      this.setState((prevState) => ({
        data: data,
        dataGrabbed: !prevState.dataGrabbed,
      }));
    });
  }

  render() {
    // Use a loader while api is grabbed...
    if (!this.state.dataGrabbed) return <div className="flex flex-col items-center"><Loader /></div>;
    const { Character } = this.state.data;
    console.log(Character);

    return (
      <div className="ffxiv-wrapper flex flex-col items-center">
        <h2>{Character.Name}</h2>
        <img src={Character.Portrait}/>
      </div>
    );
  }
}

export default FFXIVbox;
