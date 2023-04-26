import type { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetchData = (fetchFunc: () => Promise<AxiosResponse>) => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetchFunc();
      console.log(res); // 배포 환경에서 확인 후,제거 예정
      if (res.statusText === "error") {
        throw new Error("HTTP Error");
      }
      if (res) setFetchData(res.data.response);
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
