import React, { Fragment } from "react";
import FirstImage from "../components/FirstImage/FirstImage";
import RoomsSection from "../components/Rooms/Rooms";
import AboutHotel from "../components/AboutHotel/AboutHotel";
import Subscription from "../components/Subscription/Subscription";
import Products from "../components/Products/Products";
import GoUp from "../components/Design/GoUp/GoUp";
import useRequest from "../hooks/use-request";

const Home = () => {
  const { values: rooms } = useRequest("rooms/all/3");
  const { values: products } = useRequest("products/all/3");
  return (
    <Fragment>
      <FirstImage
        backgroundURL="main"
        titleSpan="Squid"
        title="Hotel"
        sentence="SLEEP IF YOU CAN"
      />
      <RoomsSection processedRooms={rooms} />
      <Products processedProducts={products} />
      <AboutHotel />
      <Subscription />
      <GoUp />
    </Fragment>
  );
};

export default Home;
