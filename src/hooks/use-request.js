import axios from "axios";
import { useEffect, useState } from "react";

/**
 * useRequest() hook v1
 * @param {string} URLNAME the urlname like [ rooms ] or [ rooms?page=1 ] but if you wanna all data by infinite scroll go to use-process
 * @param {number} sliced the sliced data if you want
 * @returns
 */
const useRequest = (APINAME) => {
  const [values, setValues] = useState([]);
  const [canLoad, setCanLoad] = useState(true);
  useEffect(() => {
    if (canLoad) {
      const processing = async () => {
        setCanLoad(false);
        await axios.get(`http://127.0.0.1:8000/api/${APINAME}`).then((res) => {
          const data = res.data.message;
          setValues(data);
        });
      };
      processing();
    }
  }, [APINAME, canLoad, values]);

  return {
    values,
    canLoad,
    setCanLoad,
  };
};

export default useRequest;
