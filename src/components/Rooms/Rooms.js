import { useSelector } from "react-redux";
import Card from "../Design/Card/Card";
import Grid from "../Design/Grid/Grid";
import MainSection from "../Design/Section/MainSection";

const RoomsSection = ({ processedRooms = [] }) => {
  let rooms = useSelector((state) => state.roomsReducer.rooms);
  if (processedRooms.length !== 0) {
    rooms = processedRooms;
  }
  const getRoomsMethod = rooms.map((el) => {
    const desc = el.description.slice(0, 50);
    return (
      <Card
        key={el.id}
        id={el.id}
        title={el.name}
        url="rooms"
        content={`${desc}...`}
        cover={`roomsImages/${el.photo}.jpg`}
      />
    );
  });
  return (
    <MainSection>
      <h2 className="section_heading">OUR ROOMS</h2>
      <Grid>{getRoomsMethod}</Grid>
    </MainSection>
  );
};

export default RoomsSection;
