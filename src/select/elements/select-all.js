import React, { useContext } from "react";
import { CheckBox, SelectAllWrapper } from "../styles";
import { SelectContext } from "../contextApi";
import { getCheckBoxStyles, getLabelStyles, getClipPath } from "../helpers";

function SelectAll({ idx, activeId }) {
  const { handleCheckAll, isCheckedAll, details } = useContext(SelectContext);
  const { customLabel, styles, checkBoxProps } = { ...details };
  const { labelStyles} = {...styles}
  const { defaultStyles, selectStyles } = getCheckBoxStyles(styles);
  const {
    defaultStyles: lDS,
    selectStyles: lSS,
    hoverStyles: lHS,
  } = getLabelStyles(styles);
  const clippath = getClipPath(checkBoxProps);
  const obj = { value: "select_all", isChecked: isCheckedAll, idx: 100000 };
  const defaultSelectAll = () => {
    return (
      <SelectAllWrapper
        isSelectAll={true}
        activeId={activeId}
        dStyles={lDS}
        sStyles={lSS}
        hStyles={lHS}
        isChecked={isCheckedAll}
        className="nspira__select--multi-select-label"
        style={{
          ...labelStyles
        }}
      >
        <CheckBox
          type="checkbox"
          checked={isCheckedAll}
          onChange={() => handleCheckAll(!isCheckedAll)}
          id={idx}
          value={"select_all"}
          key={idx}
          dStyles={defaultStyles}
          sStyles={selectStyles}
          clippath={clippath}
          className="nspira__select--multi-select-checkbox"
        />
        {"Select All"}
      </SelectAllWrapper>
    );
  };
  const callback = (item) => {
    const { isChecked } = { ...item };
    handleCheckAll(!isChecked);
  };
  return <>{customLabel ? customLabel(obj, callback) : defaultSelectAll()}</>;
}

export default SelectAll;
