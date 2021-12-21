import React from "react";
import Checkout from "../Design/Checkout/Checkout";
import { Row } from "../Design/Grid/Grid";
import Img from "../Design/Img/Img";
import MainSection from "../Design/Section/MainSection";
import classes from "./RoomSection.module.scss";

const RoomSection = ({ photo }) => {
  return (
    <MainSection>
      <h2>Room with View</h2>
      <Row justifyContent="space-between">
        <div className={classes.parentImg}>
          <Img src={`/roomsImages/${photo}.jpg`} alt={photo} />
        </div>
        <Checkout />
      </Row>
    </MainSection>
  );
};

export default RoomSection;
