/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainSection from "../components/Design/Section/MainSection";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import RelatedItems from "../components/RelatedItems/RelatedItems";
import useRequest from "../hooks/use-request";

const Product = () => {
  const { id } = useParams();
  const { values: product, canLoad, setCanLoad } = useRequest(`products/${id}`);
  const check = Object.entries(product);

  useEffect(() => {
    return () => {
      setCanLoad(true);
    };
  }, [id]);

  return (
    !canLoad &&
    check.length !== 0 && (
      <MainSection>
        <ProductDetails product={product} />
        <RelatedItems id={id} API_NAME="products/all/3" />
      </MainSection>
    )
  );
};

export default Product;
