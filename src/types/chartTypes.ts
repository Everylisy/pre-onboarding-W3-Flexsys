export interface IResData {
  [key: string]: IChartData;
}

export interface IFetchedData {
  fetchData: IChartData[];
  isFetchCompleted: boolean;
}

export interface IChartData {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface IValueData {
  id: string;
  x: string;
  y: number;
  fillColor?: string;
}

export interface IToChartProps {
  data: IChartData[];
  currentParams: string | null;
  setSearchParams: (id: { id: string }) => void;
}

export interface IToButtonProps {
  btnOption: {
    btnText: string;
    event: () => void;
  };
}

export interface IToTooltipProps {
  idData: string;
  barData: number;
  areaData: number;
  timeData: string;
}
