import React, { Component } from "react";
import VideoInfo from "../VideoInfo";
import Comments from "../Comments";
import Side from "../Side";

import Video from "../video";
import axios from "axios";
import videoOne from "../../assets/Images/video1.jpg";
import videoTwo from "../../assets/Images/video2.jpg";
import videoThree from "../../assets/Images/video3.jpg";
import videoFour from "../../assets/Images/video4.jpg";
import videoFive from "../../assets/Images/video5.jpg";
import videoSix from "../../assets/Images/video6.jpg";
import videoSeven from "../../assets/Images/video7.jpg";
import videoEight from "../../assets/Images/video8.jpg";
import videoZero from "../../assets/Images/video-0.jpg";
class Home extends Component {
  state = {
    mainVideo: {
      id: "type of <string>",
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only  allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title",
      channel: "By Red Cow",
      image: videoZero,
      views: "1,001,023",
      likes: "110,985",
      duration: "",
      video: "",
      timestamp: "12/18/2018",
      comments: [
        {
          image: "",
          name: "Michael Lyons",
          date: "12/18/2018",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        },
        {
          image: "",
          name: "Gary Wong",
          date: "12/18/2018",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        },
        {
          image: "",
          name: "Theodore Duncan",
          date: "11/15/2018",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!",
        },
      ],
    },
    sideBar: [
      {
        id: "1",
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Scotty Cranmer",
        image: videoOne,
      },
      {
        id: "2",
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Scotty Cranmer",
        image: videoTwo,
      },
      {
        id: "3",
        title: "Travel Health Useful Medical Information For",
        channel: "Scotty Cranmer",
        image: videoThree,
      },
      {
        id: "4",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: videoFour,
      },
      {
        id: "5",
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: videoFive,
      },
      {
        id: "6",
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: videoSix,
      },
      {
        id: "7",
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: videoSeven,
      },
      {
        id: "8",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: videoEight,
      },
    ],
  };
  // componentDidMount() {
  //   // try to fetch data using axios get from the brainflix api and call this . set state to update the main video and side videos.
  //   axios.get();
  // }
  render() {
    return (
      <div className="App">
        <Video image={this.state.mainVideo.image} />
        <div className="main-desktop">
          <div className="main-desktop__wrapper">
            <VideoInfo video={this.state.mainVideo} />
            <Comments comments={this.state.mainVideo.comments} />
          </div>
          <Side sideBar={this.state.sideBar} />
        </div>
      </div>
    );
  }
}
export default Home;
