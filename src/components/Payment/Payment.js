import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MainButton from "../Design/MainButton/MainButton";
import classes from "./Payment.module.scss";

const Payment = ({ setIsNext }) => {
  const [visaNumber, setVisaNumber] = useState("");
  const dispatch = useDispatch();

  const sendToHome = () => {
    dispatch({ type: "getFromPayment", visaNumber });
  };

  const returnToPrev = () => {
    setIsNext(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.card_container}>
        <div className={classes.front}>
          <div className={classes.image}>
            <img className={classes.img} src="appImages/chip.png" alt="" />
            <img className={classes.img} src="appImages/visa.png" alt="" />
          </div>
          <div className={classes.card_number_box}>################</div>
          <div className={classes.flexbox}>
            <div className={classes.box}>
              <span>card holder</span>
              <div className={classes.card_holder_name}>full name</div>
            </div>
            <div className={classes.box}>
              <span>expires</span>
              <div className={classes.expiration}>
                <span className={classes.exp_month}>mm</span>
                <span className={classes.exp_year}>yy</span>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.back}>
          <div className={classes.stripe}></div>
          <div className={classes.box}>
            <span>cvv</span>
            <div className={classes.cvv_box}></div>
            <img src="image/visa.png" alt="" />
          </div>
        </div>
      </div>

      <form action="">
        <div className={classes.inputBox}>
          <span>card number</span>
          <input
            type="text"
            maxLength="16"
            onChange={(eo) => setVisaNumber(eo.target.value)}
            className={classes.card_number_input}
          />
        </div>
        <div className={classes.inputBox}>
          <span>card holder</span>
          <input type="text" className={classes.card_holder_input} />
        </div>
        <div className={classes.flexbox}>
          <div className={classes.inputBox}>
            <span>expiration mm</span>
            <select name="" id="" className={classes.month_input}>
              <option value="month" defaultValue disabled>
                month
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className={classes.inputBox}>
            <span>expiration yy</span>
            <select name="" id="" className={classes.year_input}>
              <option value="year" defaultValue disabled>
                year
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
          <div className={classes.inputBox}>
            <span>cvv</span>
            <input type="text" maxLength="4" className={classes.cvv_input} />
          </div>
        </div>
        <br />
        <br />
        <MainButton click={returnToPrev} className={classes.submit_btn}>
          Previous
        </MainButton>
        <MainButton click={sendToHome} className={classes.submit_btn}>
          Register
        </MainButton>
      </form>
    </div>
  );
};

export default Payment;
