import React from "react";
import { Link } from "react-router-dom";
import Rate from "../Rate/Rate";
import classes from "./Card.module.scss";

const Card = ({ title, url, rate, cover, id, type }) => {
  return (
    <Link to={`/${url}/${id}`}>
      <div
        loading="lazy"
        className={classes.card}
        style={{ backgroundImage: `url(${cover})` }}
        key={id}
      >
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.rate}>
          <Rate rate={rate} />
        </p>
        <p className={classes.type}>{type}</p>
      </div>
    </Link>
  );
};

export default Card;
