import Card from "../Design/Card/Card";
import Grid from "../Design/Grid/Grid";
import MainSection from "../Design/Section/MainSection";
import useProcess from "../../hooks/use-process";
import Loading from "../Design/Loading/Loading";

const Products = ({ processedProducts = [] }) => {
  let { values: products, isLoading } = useProcess("products");
  if (processedProducts.length !== 0) {
    products = processedProducts;
  }

  const getProductsMethod = products.map((el) => {
    const desc = el.description.slice(0, 35);
    return (
      <Card
        key={el.id}
        id={el.id}
        title={el.name}
        type={"$" + el.price}
        url="store"
        rate={el.rate}
        cover={`productsImages/${el.photo}.jpg`}
      />
    );
  });
  return (
    <MainSection>
      <h2 className="section_heading">OUR PRODUCTS</h2>
      <Grid>{getProductsMethod}</Grid>
      {processedProducts.length === 0 && <Loading isLoading={isLoading} />}{" "}
    </MainSection>
  );
};

export default Products;
