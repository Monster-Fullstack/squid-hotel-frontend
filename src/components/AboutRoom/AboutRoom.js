import React from "react";
import Details from "../Design/Details/Details";
import { Row } from "../Design/Grid/Grid";
import classes from "./AboutRoom.module.scss";

const AboutRoom = ({ room }) => {
  return (
    <Row>
      <div className={classes.details}>
        <Details room={room} />
        <div className="aboutRoom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit
          reiciendis repellat ut debitis, totam sequi quia distinctio,
          exercitationem soluta omnis perspiciatis molestiae! Porro ducimus
          repellat nobis dicta aliquid aut?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem
          sunt tempore temporibus consequuntur sapiente quae obcaecati, natus,
          commodi nisi labore debitis rerum iste nulla doloribus quas quasi
          facilis quidem!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem
          sunt tempore temporibus consequuntur sapiente quae obcaecati, natus,
          commodi nisi labore debitis rerum iste nulla doloribus quas quasi
          facilis quidem!
        </div>
      </div>
    </Row>
  );
};

export default AboutRoom;
