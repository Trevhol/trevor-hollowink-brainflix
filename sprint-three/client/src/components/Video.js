import React, { Component, createRef } from "react";
import Play from "../assets/Icons/play.svg";
import Full from "../assets/Icons/fullscreen.svg";
import Volume from "../assets/Icons/volume.svg";
import Player from "../assets/video.mp4";
export default class Video extends Component {
  vidRef = createRef();
  // Show = this.props.image;
  // duration = this.props.duration;
  state = {};
  play = () => {
    console.log(this);
    this.vidRef.current.play();
  };

  end = () => {
    this.setState({ isPlaying: false });
    this.vidRef.current.load();
  };
  render() {
    return (
      <div className="main-hero">
        <div className="main-hero__player">
          <video
            ref={this.vidRef}
            src={Player}
            type="video/mp4"
            className="main-hero__video"
            poster={this.props.image}
          ></video>
          <div className="main-hero__button-bar">
            <div className="main-hero__play">
              <img src={Play} alt="play button" onClick={this.play} />
            </div>
            <div className="main-hero__progress-bar">
              <div className="main-hero__progress-timeline"></div>
              <div className="main-hero__progress-text">
                0:00/{this.props.duration}
              </div>
            </div>
            <div className="main-hero__volume-full">
              <img src={Full} alt="fullscreen button" />
              <img src={Volume} alt="volume button" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
