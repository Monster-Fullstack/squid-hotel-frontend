/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainSection from "../components/Design/Section/MainSection";
import ProductDetails from "../components/ProductDetails/ProductDetails";
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
      </MainSection>
    )
  );
};

export default Product;
