import React from "react";
import { Row } from "../Grid/Grid";
import classes from "./Details.module.scss";
import { ImUser } from "react-icons/im";
import { GiMagicBroom } from "react-icons/gi";
import { FaGhost } from "react-icons/fa";
import { RiGhost2Fill } from "react-icons/ri";
import { GiSoundOn, GiGhost, GiFloatingGhost } from "react-icons/gi";

const Details = ({ room }) => {
  return (
    <Row justifyContent="space-around" className={classes.grandfather}>
      <div className={classes.parents}>
        <ImUser className={classes.icon} />
        <p>4 GUESTS</p>
      </div>
      <div className={classes.parents}>
        <GiMagicBroom className={classes.icon} />
        <p>{room.allowed_type.toUpperCase()}</p>
      </div>
      <div className={classes.parents}>
        {room.horror === "scary" ? (
          <FaGhost className={classes.icon} />
        ) : room.horror === "very scary" ? (
          <RiGhost2Fill className={classes.icon} />
        ) : room.horror === "nightmare" ? (
          <GiGhost className={classes.icon} />
        ) : (
          <GiFloatingGhost className={classes.hard} />
        )}
        <Row>
          <p>HORROR: {room.horror.toUpperCase()}</p>
        </Row>
      </div>
      <div className={classes.parents}>
        <GiSoundOn className={classes.icon} />
        <p>HORROR SOUND</p>
      </div>
    </Row>
  );
};

export default Details;
