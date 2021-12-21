/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutRoom from "../components/AboutRoom/AboutRoom";
import BestRooms from "../components/BestRooms/BestRooms";
import { Row } from "../components/Design/Grid/Grid";
import OptimizePage from "../components/Design/OptimizePage/OptimizePage";
import MainSection from "../components/Design/Section/MainSection";
import FirstImage from "../components/FirstImage/FirstImage";
import RoomSection from "../components/Room/RoomSection";
import RoomProducts from "../components/RoomProducts/RoomProducts";
import useRequest from "../hooks/use-request";

const Room = () => {
  const { id } = useParams();

  const {
    values: room,
    canLoad,
    setCanLoad,
  } = useRequest(`rooms/${parseInt(id)}`);
  const check = Object.entries(room);

  useEffect(() => {
    return () => {
      setCanLoad(true);
    };
  }, [id]);

  return (
    !canLoad &&
    check.length !== 0 && (
      <Fragment>
        <FirstImage
          title={room.name}
          roomType={room.allowed_type.toUpperCase()}
          sentence={room.description}
          backgroundURL={`roomsImages/${room.photo}`}
        />
        <RoomSection photo={room.photo} />
        <MainSection>
          <Row>
            <OptimizePage>
              <AboutRoom room={room} />
              <RoomProducts />
            </OptimizePage>
            <BestRooms />
          </Row>
        </MainSection>
      </Fragment>
    )
  );
};

export default Room;
