import { useSearchParams } from "react-router-dom";
import { fetchFlexsysData } from "./api/apis";
import Chart from "./components/Chart";
import FilterButton from "./components/FilterButton";
import Layout, { BtnWrapper, ChartWrapper } from "./components/Layout";
import LoadingUI from "./components/LoadingUI";
import GlobalStyle from "./GlobalStyle";
import useFetchData from "./hooks/useFetchData";
import type { IFetchedData } from "./types/chartTypes";

const App = () => {
  const { fetchData: chartData, isFetchCompleted }: IFetchedData =
    useFetchData(fetchFlexsysData);
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
      {!isFetchCompleted && <LoadingUI />}

      {isFetchCompleted && (
        <>
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
        </>
      )}
    </Layout>
  );
};

export default App;
