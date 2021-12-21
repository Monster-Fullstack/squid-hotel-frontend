/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";
import { Row } from "../Grid/Grid";
import classes from "./BestRoomsCard.module.scss";

/* eslint-disable no-undef */

const BestRoomsCard = ({ title, allowed_type, id, photo }) => {
  return (
    <div key={id}>
      <Row className={classes.card}>
        <img src={`/roomsImages/${photo}.jpg`} alt={title} />
        <div className={classes.details}>
          <h4>{title}</h4>
          <p>{allowed_type.toUpperCase()} SUBSCRIPTION</p>
          <Link to={`/rooms/${id}`} className={classes.bookNow}>
            BOOK NOW
          </Link>
        </div>
      </Row>
    </div>
  );
};

export default BestRoomsCard;
