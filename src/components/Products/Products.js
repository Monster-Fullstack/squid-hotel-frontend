import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Card from "../Design/Card/Card";
import Grid from "../Design/Grid/Grid";
import MainSection from "../Design/Section/MainSection";
import { productsActions } from "../../store/products";
import useProcess from "../../hooks/use-process";
import Loading from "../Design/Loading/Loading";

const Products = () => {
  const products = useSelector((state) => state.productsReducer.products);
  const dispatch = useDispatch();
  const dispatchProduct = (products) => {
    dispatch(productsActions.getMoreProducts(products));
  };

  const isLoading = useProcess(dispatchProduct, "products");

  const getProductsMethod = products.map((el) => {
    const desc = el.description.slice(0, 35);
    return (
      <Card
        key={el.id}
        id={el.id}
        title={el.name}
        url="store"
        content={`${desc}...`}
        price={el.price}
        cover={`productsImages/${el.photo}.jpg`}
      />
    );
  });
  return (
    <MainSection>
      <h2 className="section_heading">OUR PRODUCTS</h2>
      <Grid>{getProductsMethod}</Grid>
      <Loading isLoading={isLoading} />
    </MainSection>
  );
};

export default Products;
