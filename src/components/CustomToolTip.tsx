import type { TooltipProps } from "recharts";

const CustomToolTip = ({
  active,
  payload,
}: TooltipProps<number, string>): JSX.Element | null => {
  if (active && payload && payload.length)
    return (
      <div className="tooltip">
        <h4 className="tooltip--id">📈 {payload[0].payload.id}</h4>
        <div className="tooltip--value-wrapper">
          <p className="tooltip--value">
            <span
              style={{
                color: `${payload[1].color}`,
              }}
            >
              value_area
            </span>
            : {payload[0].payload.value_area}
          </p>
          <p className="tooltip--value">
            <span
              style={{
                color: `${payload[0].color}`,
              }}
            >
              value_bar
            </span>
            : {payload[0].payload.value_bar}
          </p>
        </div>
      </div>
    );

  return null;
};
export default CustomToolTip;
