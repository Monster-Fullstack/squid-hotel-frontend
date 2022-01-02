import React from "react";
import classes from "./Rate.module.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const Rate = ({ rate }) => {
  const starsLogic = () => {
    let stars = [];
    let halfed = false;
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        stars.push(<AiFillStar key={i} />);
      } else if (i - rate !== 1) {
        if (i - rate <= 0.5 && halfed === false) {
          halfed = true;
          stars.push(<BsStarHalf key={i} />);
        } else {
          stars.push(<AiOutlineStar key={i} />);
        }
      } else {
        stars.push(<AiOutlineStar key={i} />);
      }
    }
    return stars;
  };

  return <div className={classes.stars}>{starsLogic()}</div>;
};

export default Rate;

// rate = 4.2
// i = 5
