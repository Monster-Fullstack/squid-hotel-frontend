import React from "react";
import classes from "./Img.module.scss";

const Img = ({ src, alt }) => {
  return <img src={src} alt={alt} className={classes.img} />;
};

export default Img;
