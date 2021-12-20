/* eslint-disable jsx-a11y/anchor-has-content */
import clsx from "clsx";
import React from "react";
import classes from "./MainButton.module.scss";

const MainButton = ({ src, children, click, className }) => {
  return (
    <a href={src} className={clsx(classes.btn, className)} onClick={click}>
      {children}
    </a>
  );
};

export default MainButton;
