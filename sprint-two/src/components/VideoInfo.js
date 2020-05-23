import React from "react";
import icon from "../assets/Icons/icon.svg";
import views from "../assets/Icons/likes.svg";
import relativeTime from "./utility/date";

export default function VideoInfo(props) {
  const video = props.video;
  return (
    <div className="main-video">
      <h1 className="main-video__title">{video.title}</h1>
      <div className="main-video__underline">
        <div className="main-video__date-wrapper">
          <h3 className="main-video__channel">{video.channel} </h3>
          <h3 className="main-video__date">{relativeTime(video.timestamp)}</h3>
        </div>
        <div className="main-video__wrapper">
          <img className="main-video__icon" src={icon} alt="views symbol" />

          <p className="main-video__views">{video.views}</p>
          <img className="main-video__icon" src={views} alt="views symbol" />
          <p className="main-video__likes">{video.likes}</p>
        </div>
      </div>
      <div className="main-video__content-wrapper">
        <p className="main-video__content">{video.description}</p>
      </div>
    </div>
  );
}
