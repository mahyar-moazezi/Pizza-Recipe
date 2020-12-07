/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Header.css";
import HeaderImage from "../../Assets/7.jpg";
const Header = (props) => {
  return (
    <React.Fragment>
      <section className="header">
        <div className="header-image">
          <img src={HeaderImage} alt="introduction-image" />
        </div>
        <div className="header-text">
          <h2>
            Best recipes from <br /> all over the globe!
          </h2>
          <p>
            Imagine yourself a chef today! Choose meals from all
            cuisines of the world and fine the one you want to
            amaze your loved ones today.
          </p>
          <button>Find your favorite</button>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Header;
