import React, { Component } from "react";
import VideoInfo from "../VideoInfo";
import Comments from "../Comments";
import Side from "../Side";

import Video from "../video";
import axios from "axios";

class Home extends Component {
  state = {
    sideBar: [],
    mainVideo: {
      comments: [],
    },
  };
  //fetching data from the api, and storing it in state. Also setting the hero video
  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=7dcf7623-0c79-4b11-9fcf-431c46d8f010`
      )
      .then((res) => {
        this.setState({
          sideBar: res.data,
        });
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=7dcf7623-0c79-4b11-9fcf-431c46d8f010`
          )
          .then((res) => {
            this.setState({
              mainVideo: res.data,
            });
          });
      });
  }
  //updating the side video to the main video .
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id === this.props.match.params.id) {
      // console.log("match");
    } else {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=7dcf7623-0c79-4b11-9fcf-431c46d8f010`
        )
        .then((res) => {
          // if (this.state.mainVideo.id !== res.data.id) {
          this.setState({
            mainVideo: res.data,
          });
          // }
        });
    }
  }
  render() {
    return (
      <div className="App">
        <Video image={this.state.mainVideo.image} />
        <div className="main-desktop">
          <div className="main-desktop__wrapper">
            <VideoInfo video={this.state.mainVideo} />
            <Comments comments={this.state.mainVideo.comments} />
          </div>
          <Side
            sideBar={this.state.sideBar}
            current={this.state.mainVideo.id}
          />
        </div>
      </div>
    );
  }
}
export default Home;
