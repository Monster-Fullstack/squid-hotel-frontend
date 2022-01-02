import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./BlackButton.module.scss";

const BlackButton = ({ src, children, click, className }) => {
  return (
    <Link to={src} className={clsx(classes.btn, className)} onClick={click}>
      {children}
    </Link>
  );
};

export default BlackButton;
