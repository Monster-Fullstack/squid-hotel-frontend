import clsx from "clsx";
import React from "react";
import classes from "./Img.module.scss";

const Img = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={clsx(classes.img, className)} />;
};

export default Img;
