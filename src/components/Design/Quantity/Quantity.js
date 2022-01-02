import React from "react";
import { Row } from "../Grid/Grid";
import MainButton from "../MainButton/MainButton";
import classes from "./Quantity.module.scss";
const Quantity = () => {
  return (
    <form className={classes.parent}>
      <Row justifyContent="left">
        <input
          type="number"
          className={classes.amount}
          min="1"
          max="15"
          defaultValue="1"
        />
        <MainButton>{"Add To Cart".toUpperCase()}</MainButton>
      </Row>
    </form>
  );
};

export default Quantity;
