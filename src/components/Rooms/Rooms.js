import useProcess from "../../hooks/use-process";
import Card from "../Design/Card/Card";
import Grid from "../Design/Grid/Grid";
import Loading from "../Design/Loading/Loading";
import MainSection from "../Design/Section/MainSection";

const RoomsSection = ({ processedRooms = [] }) => {
  let { values: rooms, isLoading } = useProcess("rooms");

  if (processedRooms.length !== 0) {
    rooms = processedRooms;
  }

  const getRooms = rooms.map((el) => {
    return (
      <Card
        key={el.id}
        id={el.id}
        title={el.name}
        url="rooms"
        type={el.allowed_type.toUpperCase()}
        rate={el.rate}
        cover={`roomsImages/${el.photo}.jpg`}
      />
    );
  });

  return (
    <MainSection>
      <h2 className="section_heading">OUR ROOMS</h2>
      <Grid>{getRooms}</Grid>
      {processedRooms.length === 0 && <Loading isLoading={isLoading} />}
    </MainSection>
  );
};

export default RoomsSection;
