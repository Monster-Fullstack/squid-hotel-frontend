import React from "react";
import classes from "./Grid.module.scss";

const Grid = ({ children, justifyContent = "left" }) => {
  return (
    <div style={{ justifyContent: justifyContent }} className={classes.grid}>
      {children}
    </div>
  );
};

export default Grid;
