import React, { useContext, useEffect, useState } from "react";
import {
  MultiOptionContainer,
  MultiOption,
  CheckBox,
  CheckBoxContainer,
} from "../styles";
import { SelectContext } from "../contextApi";
import { getCheckBoxStyles, getLabelStyles, getClipPath } from "../helpers";

function Options({
  item,
  id,
  isChecked,
  handleCheck,
  label,
  // style,
  activeId,
  listWidth,
  isScrollable,
  isTooltipEnable,
}) {
  const { details, handleTooltip } = useContext(SelectContext);
  const { customLabel, styles, checkBoxProps } = { ...details };
  const { labelStyles } = { ...styles };
  const { defaultStyles, selectStyles } = getCheckBoxStyles(styles);
  const {
    defaultStyles: lDS,
    selectStyles: lSS,
    hoverStyles: lHS,
  } = getLabelStyles(styles);
  const clippath = getClipPath(checkBoxProps);
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
  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("nspira_select"));
    const el = document.getElementsByClassName(
      "nspira__select--multi-select--label"
    );
    for (let i = 0; i < el.length; i++) {
      const txtWidth = el[i].textContent.length * 11;
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
  const defaultLabel = () => {
    return (
      <MultiOptionContainer
        isChecked={isChecked}
        activeId={activeId}
        style={{
          width: isScrollable
            ? `${listWidth > localWidth ? "100%" : `${localWidth}px`}`
            : isScrollEnable
            ? `${listWidth > localWidth ? "100%" : `${localWidth}px`}`
            : "100%",
          ...labelStyles,
        }}
        dStyles={lDS}
        sStyles={lSS}
        hStyles={lHS}
        className="nspira__select--multi-select--label"
        onMouseLeave={(e) => handleDisplay(e, false)}
        onMouseOver={(e) => handleDisplay(e, true)}
      >
        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            checked={isChecked}
            onChange={(e) => handleCheck(e.target.checked, item, id)}
            id={item[label]}
            value={item[label]}
            onKeyDown={(e) => handleCheck(e.target.checked, item, id)}
            dStyles={defaultStyles}
            sStyles={selectStyles}
            clippath={clippath}
            className="nspira__select--multi-select--checkbox"
          />
        </CheckBoxContainer>
        <MultiOption>{item[label]}</MultiOption>
      </MultiOptionContainer>
    );
  };
  const callback = (item) => {
    const { isChecked, idx } = { ...item };
    handleCheck(!isChecked, item, idx);
  };
  return (
    <>{customLabel ? customLabel(item, callback) : defaultLabel()}</>
  );
}

export default Options;
