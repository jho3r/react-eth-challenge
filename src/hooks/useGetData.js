import { useEffect, useState } from "react";
import getData from "../utils/getData";

const useGetProducts = (API) => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
        const response = await getData(API);
        setData(response);
    })();
  }, []);

  return data;
};

export default useGetProducts;
