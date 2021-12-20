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
      this.setState((prevState) => ({
        data: data,
        dataGrabbed: !prevState.dataGrabbed,
      }));
    });
  }

  render() {
    // Use a loader while api is grabbed...
    if (!this.state.dataGrabbed) return <Loader />;
    const { Character } = this.state.data;
    console.log(Character);

    return (
      <div>
        <img src={Character.Avatar} />
      </div>
    );
  }
}

export default FFXIVbox;
