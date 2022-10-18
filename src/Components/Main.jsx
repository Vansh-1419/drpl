import React from "react";
import classes from "../Modules/Main.module.css";
import Hotspot from "./Hotspot";
import kun from "../assets/kun.jpg";
import star from "../assets/star.png";
import phone from "../assets/phone.jpg";
const Main = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.display}>
        <div className={classes.active}>
          <img src={kun} />
          <h3>Kungfu Panda</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            numquam ut totam mollitia fuga beatae facere officia corporis,
            perspiciatis delectus commodi praesentium error debitis consequatur,
            quae tenetur laborum perferendis cumque!
          </p>
        </div>
        <div className={classes.side}>
          <div>
            <img src={star} />
            <h3>Star Wars</h3>
          </div>
          <div>
            <img src={star} />
            <h3>Star Wars</h3>
          </div>
          <div>
            <img src={phone} />
            <h3>Smasung</h3>
          </div>
          <div>
            <img src={phone} />
            <h3>Samsung</h3>
          </div>
        </div>
      </div>
      <div className={classes.hotspot}>
        <Hotspot />
      </div>
    </div>
  );
};
export default Main;
