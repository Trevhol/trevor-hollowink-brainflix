import React from "react";
import Play from "../assets/Icons/play.svg";
import Full from "../assets/Icons/fullscreen.svg";
import Volume from "../assets/Icons/volume.svg";

export default function Video(props) {
  const Show = props.image;
  const duration = props.duration;

  return (
    <>
      <div className="main-hero">
        <div className="main-hero__player">
          <video className="main-hero__video" poster={Show}>
            <source src="./assets/video.mp4" type="video/mp4"></source>
          </video>
          <div className="main-hero__button-bar">
            <div className="main-hero__play">
              <img src={Play} alt="play button" />
            </div>
            <div className="main-hero__progress-bar">
              <div className="main-hero__progress-timeline"></div>
              <div className="main-hero__progress-text">0:00/{duration}</div>
            </div>
            <div className="main-hero__volume-full">
              <img src={Full} alt="fullscreen button" />
              <img src={Volume} alt="volume button" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
