import React from "react";
import { Parallax } from "react-parallax";
import picTwo from "./images/picTwo.jpg";
import classes from "./values.module.css";

const ImageTwo = () => {
  return (
    <>
      <Parallax className={classes.parImg} bgImage={picTwo} strength={800}>
        <div className={classes.parText1}>
          <p className={classes.parText_one}>Наши ценности</p>
        </div>
      </Parallax>
    </>
  );
};

export default ImageTwo;
