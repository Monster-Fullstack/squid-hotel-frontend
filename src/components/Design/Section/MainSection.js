import React from "react";
import classes from "./Section.module.scss";

const MainSection = ({ children }) => {
  return <section className={classes.MainSection}>{children}</section>;
};

export default MainSection;
