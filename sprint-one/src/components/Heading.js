import React from "react";
import Logo from "../assets/Logo/logo.svg";
import Mohan from "../assets/Images/Mohan-muruge.jpg";
import Search from "../assets/Icons/search.svg";
import Upload from "../assets/Icons/upload.svg";
function Heading() {
  return (
    <>
      <div className="main-header">
        <img className="main-header__logo" src={Logo} />
        <form>
          <input
            className="main-header__bar"
            type="text"
            img
            src={Search}
            placeholder="Search"
          />
          <div className="main-header__wrapper">
            <button type="submit" className="main-header__submit">
              <img className="main-header__upload" src={Upload} />
              UPLOAD
            </button>
            <img className="main-header__mohan" src={Mohan} />
          </div>
        </form>
      </div>
    </>
  );
}

export default Heading;
