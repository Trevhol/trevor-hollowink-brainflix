import React from "react";
import { Link } from "react-router-dom";

export default function Side(props) {
  console.log(props.sideBar);
  const videos = props.sideBar
    .filter((video) => video.id !== props.current)
    .map((video, index) => {
      return (
        <Link to={`/nextvideo/${video.id}`} key={index}>
          <div className="side-video__section" key={index}>
            <div className="side-video__images">
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
        </Link>
      );
    });

  return (
    <div className="side-video">
      <h4 className="side-video__title">NEXT VIDEO</h4>
      {videos}
    </div>
  );
}
