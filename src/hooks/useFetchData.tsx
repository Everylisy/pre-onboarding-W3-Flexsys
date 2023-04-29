import type { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetchData = (fetchFunc: () => Promise<AxiosResponse>) => {
  const [fetchData, setFetchData] = useState([]);
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const getData = async () => {
    try {
      const res = await fetchFunc();
      if (res.status === 200) {
        setFetchData(res.data.response);
      } else throw new Error("HTTP Error");
    } catch (error) {
      alert(error);
      console.error(
        "Fetch Error:",
        error instanceof Error ? error.message : error,
      );
      throw error;
    }
    setIsFetchCompleted(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return { fetchData, isFetchCompleted };
};

export default useFetchData;
