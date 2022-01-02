import React from "react";
import BlackButton from "../BlackButton/BlackButton";
import MainButton from "../MainButton/MainButton";
import classes from "./SubscriptionCard.module.scss";

const SubscriptionCard = ({
  name,
  price,
  url,
  desc1,
  desc2,
  desc3,
  desc4,
  isMainButton,
}) => {
  return (
    <div className={classes.card}>
      <h3 className={classes.title}>{name}</h3>
      <p className={classes.price}>
        <span
          className={isMainButton ? classes.dollarMain : classes.dollarBlack}
        >
          $
        </span>
        {price},000
      </p>
      <p className={classes.per}>per month</p>
      <div className={classes.content}>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p>{desc3}</p>
        <p>{desc4}</p>
      </div>
      {isMainButton ? (
        <MainButton className={classes.edit_btn} src="/register?type=premium">
          Subscripe Now
        </MainButton>
      ) : (
        <BlackButton className={classes.edit_btn} src="/register?type=basic">
          Subscripe Now
        </BlackButton>
      )}
    </div>
  );
};

export default SubscriptionCard;
