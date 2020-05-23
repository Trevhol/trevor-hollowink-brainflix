import React, { Component } from "react";
import Upload from "../../assets/Images/Upload.jpg";
export class upload extends Component {
  render() {
    return (
      <div className="main-upload">
        <h1 className="main-upload__title">Upload Video</h1>
        <p className="main-upload__thumbnail">VIDEO THUMBNAIL</p>
        <img
          className="main-upload__image"
          src={Upload}
          alt="riding a bike"
        ></img>
        <form className="main-upload__form">
          <h4 className="main-upload__video">TITLE YOUR VIDEO</h4>
          <textarea
            name="message"
            className="main-upload__title-input"
            placeholder="Add a title to your video"
          ></textarea>
          <h4 className="main-upload__description">ADD A VIDEO DESCRIPTION</h4>
          <textarea
            name="message"
            className="main-upload__video-description"
            placeholder="Add a description of your video"
          ></textarea>
          <div className="main-upload__button-reverse">
            <div className="main-upload__button-wrapper">
              <button type="submit" className="main-upload__button">
                Publish
              </button>
            </div>
            <button type="submit" className="main-upload__button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default upload;
