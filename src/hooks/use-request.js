import axios from "axios";
import { useEffect, useState } from "react";

/**
 * useRequest() hook v3
 * @param {string} URLNAME[Rq] the urlname like [ rooms ] or [ rooms?page=1 ] but if you wanna all data by infinite scroll go to use-process
 * @param {object} dataForPost[Op] the data that you wanna put it for post request when it empty the request will be get
 * @returns
 */
const useRequest = (APINAME, dataForPost = {}, PostIsReady = false) => {
  const [values, setValues] = useState([]);
  const [canLoad, setCanLoad] = useState(true);
  const checkDataForPost = Object.entries(dataForPost);
  useEffect(() => {
    if (canLoad) {
      if (checkDataForPost.length === 0) {
        const processing = async () => {
          setCanLoad(false);
          await axios
            .get(`http://127.0.0.1:8000/api/${APINAME}`)
            .then((res) => {
              const data = res.data.message;
              setValues(data);
            });
        };
        processing();
      } else if (checkDataForPost.length > 0) {
        if (PostIsReady) {
          const processing = async () => {
            try {
              let result = await axios.post(
                `http://127.0.0.1:8000/api/${APINAME}`,
                dataForPost
              );
              setValues(result.data.message);
            } catch (error) {
              console.error(error.response.data); // NOTE - use "error.response.data` (not "error")
            }
          };
          processing();
        }
      }
    }
  }, [APINAME, PostIsReady, canLoad, checkDataForPost, dataForPost, values]);

  return {
    values,
    canLoad,
    setCanLoad,
  };
};

export default useRequest;
