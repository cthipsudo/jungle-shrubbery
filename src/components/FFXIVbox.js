import React from "react";
import { Component } from "react/cjs/react.production.min";
import FFXIVServices from "../services/FFXIV-services";

class FFXIVbox extends Component {
  state = {
    data: {},
    dataGrabbed: false,
  };

  componentDidMount() {
    const data = FFXIVServices.grabFFXIVChar();
    data.then((data) => {
      //console.log(data);
      this.setState((prevState) => ({
        data: data,
        dataGrabbed: !prevState.dataGrabbed,
      }));
      //console.log(this.state.data);
    });
  }

  render() {
    if (!this.state.dataGrabbed) return null;
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
