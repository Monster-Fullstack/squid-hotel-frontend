import React, { Fragment } from "react";
import GoUp from "../components/Design/GoUp/GoUp";
import FirstImage from "../components/FirstImage/FirstImage";
import RoomsSection from "../components/Rooms/Rooms";

const Rooms = () => {
  return (
    <Fragment>
      <FirstImage
        backgroundURL="appImages/rooms_cover"
        titleSpan="Squid"
        title="Rooms"
        sentence="BOOK NOW AND ENJOY WITH VERY HORROR ROOM"
      />
      <RoomsSection />
      <GoUp />
    </Fragment>
  );
};

export default Rooms;
