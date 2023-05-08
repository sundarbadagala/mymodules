/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import SelectHead from "./select-head";
import SelectBody from "./select-body";
import SimpleTooltip from "../elements/simple-tooltip";
import { SelectContainer, FocusOutContainer } from "../styles";
import { SelectContext } from "../contextApi";
import { getCustomLabel } from "../helpers/getCustomLabel";

function MultiSelect() {
  const {
    details,
    handleCheckedOptions,
    isEnable,
    handleFocus,
    handleData,
    handleIsCheckedAll,
    tooltip,
  } = useContext(SelectContext);
  const {
    options = [],
    value = "",
    keys = "value",
    customLabel,
    className
  } = { ...details };
  const { isDisplay, value: tooltipValue } = { ...tooltip };
  useEffect(() => {
    if (options.length) {
      const allOptions = options.map((item, index) => ({
        ...item,
        isChecked: false,
        idx: index,
        customLabel: getCustomLabel(customLabel, item),
      }));
      if (value.length) {
        const updateData = allOptions.map((item) =>
          value.includes(item?.[keys])
            ? {
                ...item,
                isChecked: true,
                customLabel: getCustomLabel(customLabel, item),
              }
            : {
                ...item,
                isChecked: false,
                customLabel: getCustomLabel(customLabel, item),
              }
        );
        const filterOpts = allOptions.filter((option) =>
          value.includes(option?.[keys])
        );
        handleData(updateData);
        handleCheckedOptions(filterOpts);
        if (updateData.length === filterOpts.length) {
          handleIsCheckedAll(true);
        } else {
          handleIsCheckedAll(false);
        }
      } else {
        handleData(allOptions);
        handleCheckedOptions([]);
        handleIsCheckedAll(false);
      }
    } else {
      handleData([]);
      handleCheckedOptions([]);
    }
  }, [options[0], value]);

  return (
    <>
      {isDisplay && <SimpleTooltip>{tooltipValue}</SimpleTooltip>}
      {isEnable && (
        <FocusOutContainer
          onClick={handleFocus}
          className="nspira__select--multi-select--focus-out"
        />
      )}
      <SelectContainer
        isEnable={isEnable}
        className={`${className} nspira__select--multi-select--container`}
      >
        <SelectHead />
        {isEnable && <SelectBody />}
      </SelectContainer>
    </>
  );
}

export default React.memo(MultiSelect);
