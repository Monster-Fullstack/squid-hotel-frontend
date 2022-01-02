import { Fragment } from "react";
import { useEffect } from "react";
import useRequest from "../../hooks/use-request";
import Card from "../Design/Card/Card";
import { Row } from "../Design/Grid/Grid";
import MainSection from "../Design/Section/MainSection";
import classes from "./RelatedItems.module.scss";

const RelatedItems = ({ id, API_NAME }) => {
  const { values: items, canLoad, setCanLoad } = useRequest(API_NAME);

  useEffect(() => {
    return () => {
      setCanLoad(true);
    };
  }, [id]);

  const item = items.map((el) => {
    return (
      <Card
        key={el.id}
        id={el.id}
        title={el.name}
        url="store"
        rate={el.rate}
        cover={`/productsImages/${el.photo}.jpg`}
        type={"$" + el.price}
      />
    );
  });
  return (
    !canLoad &&
    items.length !== 0 && (
      <Fragment>
        <h2 style={{ marginTop: "3rem" }}>Related Products</h2>
        <Row justifyContent="left">{item}</Row>
      </Fragment>
    )
  );
};

export default RelatedItems;
