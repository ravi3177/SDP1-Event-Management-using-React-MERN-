import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h1>EVM</h1>
            <h3>Effortless_Elegance</h3>
            <p>
            With every last detail taken care of, we're here to ensure the day you've always dreamed of will be the day you'll never forget.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                Book your Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
