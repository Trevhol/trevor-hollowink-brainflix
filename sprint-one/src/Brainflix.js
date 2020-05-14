import React from "react";
import "./styles/main.css";
import NewComponent from "./components/Heading";
import Video from "./components/video";
import Info from "./components/info";
function Brainflix() {
  return (
    <div className="App">
      <NewComponent />
      <Video />
      <Info />
    </div>
  );
}

export default Brainflix;
