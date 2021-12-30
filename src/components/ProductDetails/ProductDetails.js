import React from "react";
import { Row } from "../Design/Grid/Grid";
import Img from "../Design/Img/Img";
import Quantity from "../Design/Quantity/Quantity";
import Rate from "../Design/Rate/Rate";
import classes from "./ProductDetails.module.scss";

const ProductDetails = ({ product }) => {
  return (
    <Row>
      <div className={classes.parents}>
        <Img src={`/productsImages/${product.photo}.jpg`} alt={product.name} />
      </div>
      <div className={classes.parents}>
        <h2>{product.name}</h2>
        <Rate rate={product.rate} />
        <p className={classes.price}>USD ${product.price}</p>
        <p className={classes.description}>{product.description}</p>
        <Quantity />
      </div>
    </Row>
  );
};

export default ProductDetails;
