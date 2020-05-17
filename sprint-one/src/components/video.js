import React from "react";
// import Show from "../assets/Images/video-0.jpg";
import Play from "../assets/Icons/play.svg";
import Scrubber from "../assets/Icons/scrubber.svg";
import Full from "../assets/Icons/fullscreen.svg";
import Volume from "../assets/Icons/volume.svg";

export default function Video(props) {
  const Show = props.image;
  console.log(props.data);
  return (
    <>
      <div className="main-hero">
        <div className="main-hero__player">
          <video className="main-hero__video" poster={Show}>
            <source src="./assets/video.mp4" type="video/mp4"></source>

            <div className="main-hero__button-bar">
              <div className="main-hero__play">
                <img src={Play} />
              </div>
              <div className="main-hero__scrubber">
                <img src={Scrubber} />
              </div>
              <div className="main-hero__volume-full">
                <img src={Full} />
                <img src={Volume} />
              </div>
            </div>
          </video>
        </div>
      </div>
    </>
  );
}
