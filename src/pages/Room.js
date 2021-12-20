import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FirstImage from "../components/FirstImage/FirstImage";

const Room = () => {
  const rooms = useSelector((state) => state.roomsReducer.rooms);
  console.log(rooms);

  // useparam() for get the room from url
  const room = useParams();
  const room_id = parseInt(room.id);
  const getRooms = rooms.filter((el) => el.id === room_id);
  const getRoom = getRooms[0];
  console.log(getRoom.photo);
  return (
    <Fragment>
      <FirstImage
        title={getRoom.name}
        roomType={getRoom.allowed_type.toUpperCase()}
        sentence={getRoom.description}
        backgroundURL={`roomsImages/${getRoom.photo}`}
      />
    </Fragment>
  );
};

export default Room;
