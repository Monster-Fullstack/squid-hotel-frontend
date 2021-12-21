import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.scss";

const Card = ({ title, url, content, cover, id, price = null }) => {
  return (
    <Link to={`/${url}/${id}`}>
      <div
        loading="lazy"
        className={classes.card}
        style={{ backgroundImage: `url(${cover})` }}
        key={id}
      >
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.content}>{content}</p>
        {price !== null && <p className={classes.price}>$ {price}</p>}
      </div>
    </Link>
  );
};

export default Card;
