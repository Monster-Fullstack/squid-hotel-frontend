import React, { Fragment } from "react";
import GoUp from "../components/Design/GoUp/GoUp";
import FirstImage from "../components/FirstImage/FirstImage";
import Products from "../components/Products/Products";

const Store = () => {
  return (
    <Fragment>
      <FirstImage
        backgroundURL="appImages/store_cover"
        titleSpan="Squid"
        title="Store"
        sentence="BUY ALL THE PRODUCTS YOU WANT FOR ROOMS"
      />
      <Products />
      <GoUp />
    </Fragment>
  );
};

export default Store;
