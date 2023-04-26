import type { ApexOptions } from "apexcharts";
import ApexCharts from "react-apexcharts";
import { renderToString } from "react-dom/server";
import type { IToChartProps, IValueData } from "../types/chartTypes";
import CustomToolTip from "./CustomToolTip";

const Chart = ({ data, currentParams, setSearchParams }: IToChartProps) => {
  const areaData: IValueData[] = Object.entries(data)?.map(
    ([x, { id, value_area }]) => ({
      id,
      x,
      y: value_area,
    }),
  );

  const barData: IValueData[] = Object.entries(data)?.map(
    ([x, { id, value_bar }]) => ({
      id,
      x,
      y: value_bar,
      fillColor: id === currentParams ? "#f9c60ec4" : "",
    }),
  );

  const Times: string[] = Object.keys(data);
  const idArr: string[] = areaData.map((el) => el.id);

  const chartSeries = {
    series: [
      {
        name: "Bar",
        type: "bar",
        data: barData,
      },
      {
        name: "Area",
        type: "area",
        data: areaData,
      },
    ],
  };

  const options: ApexOptions = {
    chart: {
      stacked: false,
      fontFamily: "Spoqa Han Sans Neo",
      events: {
        click: (event, chartContext, config) => {
          const clickedId = idArr[config.dataPointIndex];
          if (clickedId) setSearchParams({ id: clickedId });
        },
      },
      selection: {
        enabled: false,
      },
      toolbar: {
        tools: {
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      enabled: true,
      custom({ series, dataPointIndex }) {
        return renderToString(
          <CustomToolTip
            idData={idArr[dataPointIndex]}
            barData={series[0][dataPointIndex]}
            areaData={series[1][dataPointIndex]}
            timeData={Times[dataPointIndex]}
          />,
        );
      },
    },
    grid: {
      strokeDashArray: 5,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 2],
      curve: "smooth",
    },
    fill: {
      opacity: [0.85, 0.25, 1],
    },
    title: {
      text: "Flexsys - Mock data chart",
      align: "left",
    },
    colors: ["#3f51b5b6", "	#C4BBAF"],
    xaxis: {
      tooltip: {
        enabled: false,
      },
      overwriteCategories: [...Times].map((el) => el.split(" ")[1]),
      tickAmount: 15,
      labels: {
        trim: false,
        rotate: 0,
        minHeight: 40,
      },
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: "Bar",
          style: {
            fontSize: "14px",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: "Area",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: "Area",
          style: {
            fontSize: "14px",
          },
        },
      },
    ],
  };

  return (
    <ApexCharts options={options} series={chartSeries.series} height={430} />
  );
};

export default Chart;
