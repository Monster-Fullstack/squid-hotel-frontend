import React from "react";
import MainSection from "../Design/Section/MainSection";
import Grid from "../Design/Grid/Grid";
import classes from "./AboutHotel.module.scss";
import Img from "../Design/Img/Img";

const AboutHotel = () => {
  return (
    <MainSection>
      <Grid>
        <div className={classes.leftSide}>
          <Img src="appImages/left_img.jpg" alt="From Our Rooms Images" />
        </div>
        <div className={classes.rightSide}>
          <h3>
            <span>Squid</span> Hotel
          </h3>
          <p>asdasdasdasdasdasdsad</p>
          <p>asdafjsfjdslkfjlkj</p>
        </div>
      </Grid>
    </MainSection>
  );
};

export default AboutHotel;
