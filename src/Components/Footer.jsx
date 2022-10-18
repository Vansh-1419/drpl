import React from "react";
import classes from "../Modules/Footer.module.css";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className={classes.info}>
          <div className={classes.genre}>
            <h4>News Section-----</h4>
            <p>
              Enterntainment|Anime|Celebrity News|technology
              news|Movies|Politics| Sports|Genral News| Trading
            </p>
          </div>
          <div className={classes.about}>
            <img src={logo} />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ea
              ipsa sed repellendus possimus alias cumque incidunt fuga in
              explicabo quae culpa, iusto dolores cum consequuntur, ad porro
              amet veritatis?
            </p>
            <div className={classes.follow}>Follow Us</div>
          </div>
        </div>
        <div className={classes.links}>
          <h4>Quick Links</h4>
          <p>About Us</p>
          <p>CVontact us</p>
          <p>DCMA POLICY</p>
          <p>Editorial Policy</p>
          <p>Fact</p>
          <p></p>
          <p></p>
        </div>
      </footer>
      <div className={classes.copy}>© 2019-2022 Daily Resaerch Plot</div>
    </React.Fragment>
  );
};
export default Footer;
