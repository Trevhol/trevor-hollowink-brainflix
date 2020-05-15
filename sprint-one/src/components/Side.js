import React from "react";

export default function Side(props) {
  console.log(props);
  const videos = props.sideBar.map((video, index) => {
    return (
      <div className="side-video__section" key={index}>
        <div classNam="side-video__images">
          <img
            className="side-video__image"
            src={video.image}
            alt="video preview"
          ></img>
        </div>
        <div className="side-video__content">
          <h3 className="side-video__name">{video.title}</h3>
          <h5 className="side-video__author">{video.channel}</h5>
        </div>
      </div>
    );
  });

  return (
    <div className="side-video">
      <h4 className="side-video__title">NEXT VIDEO</h4>
      {videos}
    </div>
  );
}
