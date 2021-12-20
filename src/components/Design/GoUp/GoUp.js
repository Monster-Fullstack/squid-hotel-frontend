import React, { useEffect, useState } from "react";
import classes from "./GoUp.module.scss";
import { BiArrowFromBottom } from "react-icons/bi";
import clsx from "clsx";

const GoUp = () => {
  const [isVisable, setIsVisable] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={clsx(isVisable ? classes.visable : classes.hide, classes.goup)}
    >
      <BiArrowFromBottom className={classes.arrow} />
    </button>
  );
};

export default GoUp;
