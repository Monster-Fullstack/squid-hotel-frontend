import React, { useState } from "react";
import Grid from "../Grid/Grid";
import classes from "./Checkout.module.scss";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import MainButton from "../MainButton/MainButton";

const Checkout = () => {
  const [guests, setGuests] = useState(1);
  const now = new Date();
  const today = now.getDate();
  const tomorrow = today + 1;
  const month = now.toDateString().split(" ")[1];

  const guestInc = (eo) => {
    eo.preventDefault();
    guests !== 4 && setGuests(guests + 1);
  };

  const guestDec = (eo) => {
    eo.preventDefault();
    guests !== 1 && setGuests(guests - 1);
  };

  return (
    <div className={classes.grandfather}>
      <Grid direction="column">
        <Grid justifyContent="space-between">
          <div className={classes.check_parents}>
            <h4>CHECK-IN</h4>
            <Grid justifyContent="space-between">
              <p className={classes.dateNumber}>{today}</p>

              <Grid className={classes.monthParent} direction="column">
                <p className={classes.month}>{month}</p>
              </Grid>
            </Grid>
          </div>
          <div className={classes.check_parents}>
            <h4>CHECK-OUT</h4>
            <Grid justifyContent="space-between">
              <p className={classes.dateNumber}>{tomorrow}</p>
              <Grid className={classes.monthParent} direction="column">
                <p className={classes.month}>{month}</p>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid justifyContent="space-between">
          <div className={classes.check_parents}>
            <h4>GUESTS</h4>
            <Grid justifyContent="space-between">
              <p className={classes.dateNumber}>{guests}</p>
              <Grid className={classes.monthParent} direction="column">
                <AiFillCaretUp onClick={guestInc} />
                <AiFillCaretDown onClick={guestDec} />
              </Grid>
            </Grid>
          </div>
          <div className={classes.check_parents}>
            <h4>NIGHTS</h4>
            <div className={classes.check_date}>
              <p className={classes.dateNumber}>1</p>
            </div>
          </div>
        </Grid>
        <MainButton className={classes.bookNow}>BOOK NOW</MainButton>
      </Grid>
    </div>
  );
};

export default Checkout;
