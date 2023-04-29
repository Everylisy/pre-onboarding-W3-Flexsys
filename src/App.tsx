import { useSearchParams } from "react-router-dom";
import { fetchFlexsysData } from "./api/apis";
import Chart from "./components/Chart";
import FilterButton from "./components/FilterButton";
import Layout, { BtnWrapper, ChartWrapper } from "./components/Layout";
import GlobalStyle from "./GlobalStyle";
import useFetchData from "./hooks/useFetchData";
import type { IChartData } from "./types/chartTypes";

const App = () => {
  const chartData: IChartData[] = useFetchData(fetchFlexsysData);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get("id");

  const idArr = Object.values(chartData).map((v) => v.id);
  const uniqueIdArr = [...new Set(idArr), "필터 해제"];

  const handleButtonFilter = (clickedId: string) => {
    return clickedId ? setSearchParams({ id: clickedId }) : setSearchParams({});
  };

  return (
    <Layout>
      <GlobalStyle />

      <BtnWrapper>
        {uniqueIdArr.map((id) => {
          return (
            <FilterButton
              key={id}
              btnOption={{
                btnText: id,
                event: () => handleButtonFilter(id),
              }}
            />
          );
        })}
      </BtnWrapper>

      <ChartWrapper>
        <Chart
          data={chartData}
          currentParams={currentParams}
          setSearchParams={setSearchParams}
        />
      </ChartWrapper>
    </Layout>
  );
};

export default App;
