import React from "react";

export default function VideoInfo(props) {
  const video = props.video;
  return (
    <div className="main-video">
      <h1 className="main-video__title">{video.title}</h1>

      <h3 className="main-video__channel">{video.channel} </h3>
      <h5 className="main-video__date">{video.timestamp}</h5>
      <div className="main-video__wrapper">
        <p className="main-video__views">{video.views}</p>
        <p className="main-video__likes">{video.likes}</p>
      </div>
      <div className="main-video__content-wrapper">
        <p className="main-video__content">{video.description}</p>
      </div>
    </div>
  );
}
