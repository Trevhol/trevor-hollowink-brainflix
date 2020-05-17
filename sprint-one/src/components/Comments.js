import React from "react";
import Mohan from "../assets/Images/Mohan-muruge.jpg";
import Grey from "../assets/Images/test.png";
export default function commentSection(props) {
  const comments = props.comments.map((comment, index) => {
    return (
      <div className="main-comments__section" key={index}>
        <img className="main-comments__image" src={Grey} alt="Mohan image" />
        <div className="main-comments__wrap">
          <div className="main-comments__wrapper">
            <h4 className="main-comments__name">{comment.name}</h4>
            <p className="main-comments__date">{comment.date}</p>
          </div>
          <p className="main-comments__content">{comment.comment}</p>
        </div>
      </div>
    );
  });
  return (
    <section className="main-comments">
      <form className="main-comments__form">
        <h3 className="main-comments__title">3 Comments</h3>
        <h4 className="main-comments__conversation">JOIN THE CONVERSATION</h4>
        <div className="main-comments_wrapper">
          <img className="main-comments__mohan" src={Mohan} alt="Mohan image" />
          <textarea
            name="message"
            className="main-comments__comment"
            placeholder="That was easily the most spectacular BMX moment ever."
          ></textarea>
        </div>
        <button type="submit" className="main-comments__submit">
          COMMENT
        </button>
      </form>
      <div className="main-comments__call">{comments}</div>
    </section>
  );
}
