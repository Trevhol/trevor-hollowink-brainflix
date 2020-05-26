import React, { Component } from "react";
import VideoInfo from "../VideoInfo";
import Comments from "../Comments";
import Side from "../Side";
import Video from "../Video";
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
        `https://project-2-api.herokuapp.com/videos?api_key=7dcf7623-0c79-4b11-9fcf-431c46d8f0108`
      )
      .then((res) => {
        this.setState({
          sideBar: res.data,
        });
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=7dcf7623-0c79-4b11-9fcf-431c46d8f0108`
          )
          .then((res) => {
            const mainVideo = res.data;

            // sorts the comments from newest to oldest.
            mainVideo.comments.sort((a, b) => {
              return b.timestamp - a.timestamp;
            });
            this.setState({
              mainVideo,
            });
          });
      });
  }
  //updating the side video to the main video .
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id === this.props.match.params.id) {
    } else {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=7dcf7623-0c79-4b11-9fcf-431c46d8f0108`
        )
        .then((res) => {
          const mainVideo = res.data;
          //sorting my comments by date when I click off the main video to another video and back.
          mainVideo.comments.sort((a, b) => {
            return b.timestamp - a.timestamp;
          });
          this.setState({
            mainVideo: res.data,
          });
        });
    }
  }
  //handling the button and preventing the page from refreshing .
  handleSubmit = (event) => {
    event.preventDefault();

    let id = this.state.mainVideo.id;
    let commentObj = {
      name: "Trevor Hol",
      comment: `${event.target.message.value}`,
    };
    console.log({ commentObj });

    this.postComment(id, commentObj);
  };
  //creating post function with axios.post , and resetting the state.
  postComment = (id, comment) => {
    axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=7dcf7623-0c79-4b11-9fcf-431c46d8f0108`,
        comment
      )

      .then((response) => {
        console.log({ response });
        const comment = response.data;
        const { comments } = this.state.mainVideo;

        const mainVideo = {
          ...this.state.mainVideo,
        };
        mainVideo.comments = [comment, ...comments];

        this.setState({
          mainVideo,
        });
      });
  };
  render() {
    return (
      <div className="App">
        <Video
          image={this.state.mainVideo.image}
          duration={this.state.mainVideo.duration}
        />
        <div className="main-desktop">
          <div className="main-desktop__wrapper">
            <VideoInfo video={this.state.mainVideo} />
            <Comments
              comments={this.state.mainVideo.comments}
              handleSubmit={this.handleSubmit}
            />
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
