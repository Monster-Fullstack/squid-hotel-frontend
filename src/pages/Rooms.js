import React, { Fragment } from "react";
import GoUp from "../components/Design/GoUp/GoUp";
import FirstImage from "../components/FirstImage/FirstImage";
import { useDispatch } from "react-redux";
import useProcess from "../hooks/use-process";
import { roomsActions } from "../store/rooms";
import RoomsSection from "../components/Rooms/Rooms";
import Loading from "../components/Design/Loading/Loading";

const Rooms = () => {
  const dispatch = useDispatch();
  const dispatchRooms = (rooms) => {
    dispatch(roomsActions.getMoreRooms(rooms));
  };
  const isLoading = useProcess(dispatchRooms, "rooms");

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
      <Loading isLoading={isLoading} />
    </Fragment>
  );
};

export default Rooms;
