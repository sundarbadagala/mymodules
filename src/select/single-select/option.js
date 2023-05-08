import React, { useContext, useEffect, useState } from "react";
import { SingleOption, SingleOptionContainer } from "../styles";
import { SelectContext } from "../contextApi";
import { getLabelStyles } from "../helpers";

function Options({
  item,
  id,
  handleSelect,
  isHighlight,
  label,
  activeId,
  // style,
  listWidth,
  isScrollable,
  isTooltipEnable,
}) {
  const { details, handleTooltip } = useContext(SelectContext);
  const { customLabel, styles } = { ...details };
  const { labelStyles } = { ...styles };
  const { defaultStyles, selectStyles, hoverStyles } = getLabelStyles(styles);
  const [isScrollEnable, setIsScrollEnable] = useState(false);
  const getScreenWidth = () => {
    const inWidth = window.innerWidth;
    if (inWidth < 1024) {
      setIsScrollEnable(true);
    } else {
      setIsScrollEnable(false);
    }
  };
  window.addEventListener("resize", getScreenWidth);
  const callback = (item) => {
    handleSelect(item, item._id);
  };
  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("nspira_select"));
    const el = document.getElementsByClassName(
      "nspira__select--single-select--label"
    );
    for (let i = 0; i < el.length; i++) {
      const fontVal = el[i].style.fontSize;
      const txtWidth = fontVal
        ? el[i].textContent.length * fontVal
        : el[i].textContent.length * 9;
      if (val < txtWidth) {
        localStorage.setItem("nspira_select", JSON.stringify(txtWidth));
      }
    }
    getScreenWidth();
    return () => {
      setIsScrollEnable(false);
    };
  }, []);
  const localWidth = JSON.parse(localStorage.getItem("nspira_select"));
  const handleDisplay = (e, condition) => {
    const isEnable =
      isTooltipEnable === undefined
        ? isScrollable === true
          ? false
          : isScrollEnable
          ? false
          : true
        : isTooltipEnable;
    if (isEnable) {
      handleTooltip(e, item[label], condition);
    }
  };
  return (
    <>
      {customLabel ? (
        customLabel(item, callback)
      ) : (
        <SingleOptionContainer
          onClick={() => handleSelect(item, id)}
          isHighlight={isHighlight}
          activeId={activeId}
          style={{
            width: isScrollable
              ? `${listWidth > localWidth ? "100%" : `${localWidth}px`}`
              : isScrollEnable
              ? `${listWidth > localWidth ? "100%" : `${localWidth}px`}`
              : "100%",
            ...labelStyles,
          }}
          dStyles={defaultStyles}
          sStyles={selectStyles}
          hStyles={hoverStyles}
          className="nspira__select--single-select--label"
          onMouseLeave={(e) => handleDisplay(e, false)}
          onMouseOver={(e) => handleDisplay(e, true)}
        >
          <SingleOption>{item[label]}</SingleOption>
        </SingleOptionContainer>
      )}
    </>
  );
}

export default React.memo(Options);
