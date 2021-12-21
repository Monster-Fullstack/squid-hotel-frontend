import axios from "axios";
import { useEffect, useState } from "react";

/**
 * useProcess() hook -v1
 * @description this hook make processing for data and get Infinite Scroll Pagination for cards
 * @notic backend must send the data in [ message ] object not any name else
 * @param {function} dispatch this function just execute the dispatch by responed data
 * @param {string} urlname this is the API URL NAME
 * @example 
 * const dispatchProduct = (data) => {
    dispatch(productsActions.getMoreProducts(data));
  };
 * @returns isLoading
 */
const useProcess = (URLNAME) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinshed, setIsFinshed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const getMore = () => {
      const body = document.querySelector("body");
      const position = body.scrollHeight;
      const scrolled = document.scrollingElement.scrollTop + 450;
      if (scrolled > position - 250 && !isFinshed) {
        const processing = async () => {
          setIsLoading(true);
          const res = await axios.get(
            `http://127.0.0.1:8000/api/${URLNAME}?page=${currentPage}`
          );

          const data = res.data.message.data;
          const join = values.concat(data);
          setValues(join);
          if (res.data.message.last_page === currentPage - 1) {
            setIsFinshed(true);
            return setIsLoading(false);
          }
          setCurrentPage(currentPage + 1);
          setIsLoading(false);
        };
        processing();
      }
    };

    !isLoading && window.addEventListener("scroll", getMore);

    return () => {
      window.removeEventListener("scroll", getMore);
    };
  });

  return { values, isLoading };
};

export default useProcess;
