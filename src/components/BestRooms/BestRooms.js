import useRequest from "../../hooks/use-request";
import BestRoomsCard from "../Design/BestRoomsCard/BestRoomsCard";
import { Column } from "../Design/Grid/Grid";
import classes from "./BestRooms.module.scss";

const BestRooms = () => {
  const { values: rooms, canLoad } = useRequest("rooms/all/5");

  let allRoomsCards = [];
  if (!canLoad) {
    allRoomsCards = rooms.map((el) => {
      return (
        <BestRoomsCard
          key={el.id}
          id={el.id}
          title={el.name}
          allowed_type={el.allowed_type}
          photo={el.photo}
        />
      );
    });
  }

  return (
    rooms.length !== 0 && (
      <Column className={classes.parent}>{allRoomsCards}</Column>
    )
  );
};

export default BestRooms;
