import React from "react";
import classes from "../Modules/Navbar.module.css";
import hamburger from "../assets/ham.png";
import share from "../assets/share.png";
import sea from "../assets/seac.png";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <div className={classes.nav}>
      <img src={logo} className={classes.logo}/>
      <div>
        <span>
          <b>Celibriety</b>
        </span>
        <span>
          <b>Enterntainment</b>
        </span>
        <span>
          <b>News</b>
        </span>
        <span>
          <b>Anime</b>
        </span>
        <span>
          <b>Games</b>
        </span>
        <span>
          <b>Movie</b>
        </span>
        <span>
          <b>TV Shows</b>
        </span>
      </div>
      <div className={classes.follow}>
        <img src={hamburger} />

        <img src={share} />
        <p>Follow</p>
        <img src={sea} />
      </div>
    </div>
  );
};
export default Navbar;
