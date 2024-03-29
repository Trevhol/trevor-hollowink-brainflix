import React, { Component } from "react";
import VideoInfo from "../components/VideoInfo";
import Comments from "../components/Comments";
import Side from "../components/Side";
import Video from "../components/Video";
import axios from "axios";

const useLocalhost = true;
const BASE_URL = useLocalhost
  ? "http://localhost:5000"
  : "https://project-2-api.herokuapp.com";

class Home extends Component {
  state = {
    sideBar: [],
    mainVideo: {
      comments: [],
    },
  };
  //fetching data from the api, and storing it in state. Also setting the hero video
  componentDidMount() {
    axios.get(`${BASE_URL}/videos`).then((res) => {
      this.setState({
        sideBar: res.data,
      });
      axios.get(`${BASE_URL}/videos/1af0jruup5gu`).then((res) => {
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
          `${BASE_URL}/videos/${this.props.match.params.id || "1af0jruup5gu"}`
        )

        .then((res) => {
          console.log(res);
          const mainVideo = res.data;
          console.log(mainVideo);
          //sorting my comments by date when I click off the main video to another video and back.
          console.log(typeof mainVideo.comments);
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
  handleSubmit = async (event) => {
    event.preventDefault();

    let id = this.state.mainVideo.id;
    let commentObj = {
      name: "Trevor Hol",
      comment: `${event.target.message.value}`,
    };
    console.log({ commentObj });
    event.target.reset();
    await this.postComment(id, commentObj);
  };
  postComment = async (id, comment) => {
    const response = await axios.post(
      `${BASE_URL}/videos/${id}/comments`,
      comment
    );
    const mainVideo = response.data;

    // sorts the comments from newest to oldest.
    mainVideo.comments.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    this.setState(
      {
        mainVideo: mainVideo,
      },
      () => {
        console.log(this.state.mainVideo);
      }
    );
  };
  // using axios . put call to add a like
  addLike = async () => {
    const likes = await axios
      .put(
        `${BASE_URL}/videos/${this.state.mainVideo.id}/likes`,
        JSON.stringify({})
      )
      .then((res) => res.data.likes)
      .catch((err) => {
        console.error(err);
        return this.state.mainVideo.likes;
      });

    this.setState({
      mainVideo: {
        ...this.state.mainVideo,
        likes,
      },
    });
  };
  render() {
    return (
      <div className="App">
        <Video
          image={this.state.mainVideo.image}
          duration={this.state.mainVideo.duration}
          videoId={this.state.mainVideo.id}
        />
        <div className="main-desktop">
          <div className="main-desktop__wrapper">
            <VideoInfo video={this.state.mainVideo} addLike={this.addLike} />
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
