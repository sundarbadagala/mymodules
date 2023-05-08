import React from "react";
import { Tooltip, TooltipFocusOutContainer } from "../styles";
import { getPositions } from "../helpers/getPositions";

function TooltipBox({
  positions,
  list,
  handleDisplay,
  inHeight,
  inSizes,
  children,
}) {
  const { leftHeight, rightHeight, topHeight } = getPositions(
    positions,
    inSizes,
    list
  );
  const handleNone = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <TooltipFocusOutContainer onClick={(e) => handleDisplay(e, false)} className='nspira__select--tooltip-focusout-container' />
      <Tooltip
        top={topHeight}
        left={leftHeight}
        right={rightHeight}
        tabIndex={0}
        className="nspira__select--tooltip"
        onClick={(e) => handleNone(e)}
      >
        {children}
      </Tooltip>
    </>
  );
}
export default TooltipBox;
