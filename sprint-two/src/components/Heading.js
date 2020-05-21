import React from "react";
import Logo from "../assets/Logo/logo.svg";
import Mohan from "../assets/Images/Mohan-muruge.jpg";
import Upload from "../assets/Icons/upload.svg";
import { NavLink } from "react-router-dom";
function Heading() {
  return (
    <>
      <div className="main-header">
        <NavLink to="/" className="main-header__home">
          <img className="main-header__logo" src={Logo} alt="Brainflix logo" />
        </NavLink>
        <form className="main-header__form">
          <div className="main-header__content">
            <input
              className="main-header__bar"
              type="text"
              placeholder="Search"
            />
            <div className="main-header__wrapper">
              {/* remove button later */}
              <NavLink to="/upload" className="main-header__upload">
                <button type="submit" className="main-header__submit">
                  <img
                    className="main-header__upload"
                    src={Upload}
                    alt="plus symbol"
                  />
                  UPLOAD
                </button>
              </NavLink>
              <img className="main-header__mohan" src={Mohan} alt="mohon" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Heading;
