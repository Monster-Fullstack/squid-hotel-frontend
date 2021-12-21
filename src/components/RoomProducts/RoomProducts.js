import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/use-request";
import Card from "../Design/Card/Card";
import { Row } from "../Design/Grid/Grid";
import classes from "./RoomProducts.module.scss";

const RoomProducts = () => {
  const room = useParams();
  const room_id = parseInt(room.id);
  const { values: products, isLoading } = useRequest(
    `rooms/products/${room_id}`
  );

  const allProducts =
    !isLoading &&
    products.map((el) => {
      return (
        <Card
          title={el.name}
          key={el.id}
          url={"products"}
          id={el.id}
          content={`${el.description.slice(0, 25)}...`}
          cover={`/productsImages/${el.photo}.jpg`}
          price={el.price}
        />
      );
    });

  return (
    !isLoading && (
      <div className={classes.parent}>
        <h2>Room Products</h2>
        <p>The tools that you can use it in the room</p>
        <Row>{allProducts}</Row>
      </div>
    )
  );
};

export default RoomProducts;
