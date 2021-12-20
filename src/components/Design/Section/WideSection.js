import React from "react";
import classes from "./Section.module.scss";
import clsx from "clsx";

const WideSection = ({ children, className, backgroundImg }) => {
  return (
    <section
      style={backgroundImg}
      className={clsx(classes.WideSection, className)}
    >
      {children}
    </section>
  );
};

export default WideSection;
