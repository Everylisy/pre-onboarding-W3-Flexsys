import type { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetchData = (fetchFunc: () => Promise<AxiosResponse>) => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetchFunc();
      if (res.statusText === "OK") {
        setFetchData(res.data.response);
      } else if (res.statusText === "error") {
        throw new Error("HTTP Error");
      }
    } catch (error) {
      alert(error);
      console.error(
        "Fetch Error:",
        error instanceof Error ? error.message : error,
      );
      throw error;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return fetchData;
};

export default useFetchData;
