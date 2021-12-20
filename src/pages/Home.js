import React, { Fragment, useEffect, useState } from "react";
import FirstImage from "../components/FirstImage/FirstImage";
import RoomsSection from "../components/Rooms/Rooms";
import AboutHotel from "../components/AboutHotel/AboutHotel";
import Subscription from "../components/Subscription/Subscription";
import axios from "axios";

const Home = () => {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    const processing = async () => {
      const res = await axios.get(`http://127.0.0.1:8000/api/rooms?page=1`);
      const data = res.data.message.data;
      setRooms(data.slice(0, 3));
    };
    processing();
  }, []);
  return (
    <Fragment>
      <FirstImage
        backgroundURL="main"
        titleSpan="Squid"
        title="Hotel"
        sentence="SLEEP IF YOU CAN"
      />
      <RoomsSection justRooms={true} processedRooms={rooms} />
      <AboutHotel />
      <Subscription />
    </Fragment>
  );
};

export default Home;
