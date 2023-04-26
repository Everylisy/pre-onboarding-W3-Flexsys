import styled from "styled-components";
import type { IToTooltipProps } from "../types/chartTypes";

const CustomToolTip = ({
  idData,
  barData,
  areaData,
  timeData,
}: IToTooltipProps) => {
  return (
    <TooltipWrapper>
      <h3>{idData}</h3>
      <ToolTipGroup>
        <StyledSpan color="#3f51b5">Bar: {barData}</StyledSpan>
        <StyledSpan color="#9f8b70">Area: {areaData}</StyledSpan>
        <StyledSpan color="#888">Date: {timeData}</StyledSpan>
      </ToolTipGroup>
    </TooltipWrapper>
  );
};

export default CustomToolTip;

const TooltipWrapper = styled.div`
  padding: 5px 10px;
  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;

const ToolTipGroup = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 3px;
  }
`;

const StyledSpan = styled.span`
  color: ${(props) => props.color};
`;
