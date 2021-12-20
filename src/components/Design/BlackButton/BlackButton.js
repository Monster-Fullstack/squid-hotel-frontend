import clsx from "clsx";
import React from "react";
import classes from "./BlackButton.module.scss";

const BlackButton = ({ src, children, click, className }) => {
  return (
    <a href={src} className={clsx(classes.btn, className)} onClick={click}>
      {children}
    </a>
  );
};

export default BlackButton;
