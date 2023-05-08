import React, { useContext, useState } from "react";
import { SelectContext } from "../contextApi";
import Tooltip from "./tooltip";
import { getLabels } from "../helpers";
import { CountButton, Flex, Icon } from "../styles";
import TooltipCloseIcon from '../assets/tooltip_close.svg'

function Count({ isDisplayAll }) {
  const { checkedOptions, details, handleCheck } = useContext(SelectContext);
  const { label = "label" } = { ...details };

  const { labels } = { ...getLabels(checkedOptions, label) };

  const [isDisplay, setIsDisplay] = useState(false);
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [inSizes, setInSizes] = useState({ x: 0, y: 0 });
  const handleDisplay = (e, condition) => {
    e.stopPropagation();
    setPositions({ x: e.clientX, y: e.clientY });
    setIsDisplay(condition);
    setInSizes({ y: window.innerHeight, x: window.innerWidth });
  };
  const handleClear = (data) => {
    if (checkedOptions.length === 1) {
      setIsDisplay(false);
      handleCheck(false, data, data?.idx);
    } else {
      handleCheck(false, data, data?.idx);
    }
  };
  return (
    <>
      {isDisplayAll
        ? checkedOptions?.length > 0 && (
            <CountButton onClick={(e) => handleDisplay(e, true)} className='nspira__select--count-button-not-display-all'>
              {checkedOptions?.length}
            </CountButton>
          )
        : checkedOptions?.length > 1 && (
            <CountButton onClick={(e) => handleDisplay(e, true)} className='nspira__select--count-button-display-all'>
              {`+${checkedOptions?.length - 1}`}
            </CountButton>
          )}
      {isDisplay && labels.length && (
        <Tooltip
          positions={positions}
          list={labels}
          handleDisplay={handleDisplay}
          inSizes={inSizes}
        >
          {labels.length &&
            labels.map((item, index) => (
              <Flex
                key={index}
                className="nspira__select--count-box"
                styles={{ justifyContent: "space-between" }}
              >
                {item}{" "}
                <Icon src={TooltipCloseIcon} alt='tooltip close' onClick={() => handleClear(checkedOptions[index])} className='nspira__select--toolitp-close'/>
              </Flex>
            ))}
        </Tooltip>
      )}
    </>
  );
}

export default Count;
