import React from "react";
import classes from "./OptimizePage.module.scss";

const OptimizePage = ({ children }) => {
  return <div className={classes.parent}>{children}</div>;
};

export default OptimizePage;
