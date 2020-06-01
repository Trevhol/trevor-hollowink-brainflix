import React, { Component } from "react";
import axios from "axios";
import Upload from "../assets/Images/Upload.jpg";

const useLocalhost = true;
const BASE_URL = useLocalhost
  ? "http://localhost:5000"
  : "https://project-2-api.herokuapp.com";

export class upload extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      title: "",
      description: "",
    };
  }

  updateDescription = (e) => {
    const value = e.target.value;

    this.setState({ description: value });
  };

  updateTitle = (e) => {
    const value = e.target.value;

    this.setState({ title: value });
  };

  uploadVideo = async () => {
    // image to come
    const { title, description } = this.state;
    await axios
      .post(`${BASE_URL}/videos`, JSON.stringify({ title, description }), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    return (
      <div className="main-upload">
        <h1 className="main-upload__title">Upload Video</h1>
        <form className="main-upload__form">
          <div className="main-upload__main-wrapper">
            <div className="main-upload__first-wrapper">
              <p className="main-upload__thumbnail">VIDEO THUMBNAIL</p>
              <img
                className="main-upload__image"
                src={Upload}
                alt="riding a bike"
              ></img>
            </div>
            <div className="main-upload__second-wrapper">
              <h4 className="main-upload__video">TITLE YOUR VIDEO</h4>
              <textarea
                name="message"
                className="main-upload__title-input"
                placeholder="Add a title to your video"
                value={this.state.title}
                onChange={this.updateTitle}
              ></textarea>
              <h4 className="main-upload__description">
                ADD A VIDEO DESCRIPTION
              </h4>
              <textarea
                name="message"
                className="main-upload__video-description"
                placeholder="Add a description of your video"
                value={this.state.description}
                onChange={this.updateDescription}
              ></textarea>
            </div>
          </div>
          <div className="main-upload__button-reverse">
            <div className="main-upload__button-wrapper">
              <button
                type="submit"
                className="main-upload__button"
                onClick={this.uploadVideo}
              >
                PUBLISH
              </button>
            </div>
            <button type="submit" className="main-upload__cancel-button">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default upload;
