import React, { useEffect } from "react";
import WideSection from "../Design/Section/WideSection";
import classes from "./FirstImage.module.scss";
// roomType => for just room component
const FirstImage = ({
  title,
  sentence,
  titleSpan,
  backgroundURL,
  roomType,
}) => {
  useEffect(() => {
    const audio = new Audio("/horror.mp3");
    const audioTime = setTimeout(() => {
      audio.play();
    }, 1300);
    return () => {
      clearTimeout(audioTime);
    };
  }, []);
  return (
    <WideSection
      backgroundImg={{ backgroundImage: `url("/${backgroundURL}.jpg")` }}
      className={classes.firstImage}
    >
      <h1>
        <span>{titleSpan} </span>
        {title}
      </h1>
      <p className={classes.sentence}>{sentence}</p>
      <p className={classes.room_type}>{roomType}</p>
    </WideSection>
  );
};

export default FirstImage;
