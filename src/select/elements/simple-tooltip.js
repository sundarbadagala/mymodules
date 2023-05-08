import React, { useContext } from "react";
import { SelectContext } from "../contextApi";
import { SimpleTooltipWrapper } from "../styles";

function SimpleTooltip({ children }) {
  const { tooltip, handleTooltip } = useContext(SelectContext);
  const { x, y } = { ...tooltip };
  return (
    <SimpleTooltipWrapper
      x={x}
      y={y}
      className="nspira__select--simple-tooltip"
      onMouseLeave={(e) =>  handleTooltip(e,'',false)}
    >
      {children}
    </SimpleTooltipWrapper>
  );
}

export default SimpleTooltip;
