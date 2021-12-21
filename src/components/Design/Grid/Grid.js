import clsx from "clsx";
import React from "react";
import classes from "./Grid.module.scss";

const Grid = ({
  children,
  justifyContent = "left",
  direction = "row",
  className,
}) => {
  return (
    <div
      style={{ justifyContent: justifyContent, flexDirection: direction }}
      className={clsx(classes.grid, className)}
    >
      {children}
    </div>
  );
};

export const Column = ({ justifyContent = "left", className, children }) => {
  return (
    <div
      style={{ justifyContent: justifyContent }}
      className={clsx(classes.column, className)}
    >
      {children}
    </div>
  );
};

export const Row = ({
  justifyContent = "space-between",
  className,
  children,
}) => {
  return (
    <div
      style={{ justifyContent: justifyContent }}
      className={clsx(classes.row, className)}
    >
      {children}
    </div>
  );
};

export default Grid;
