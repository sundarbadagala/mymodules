import React, { useContext } from "react";
import { Flex, MultiSelectField } from "../styles";
import { SelectContext } from "../contextApi";
import { getLabels } from "../helpers";
import Navigator from "../elements/navtigators";
import Counter from "../elements/count";
import Field from "../elements/field";
import Clear from "../elements/clear";

function SelectHead() {
  const { details, handleFocus, checkedOptions } = useContext(SelectContext);
  const {
    isDisabled,
    isError,
    headProps,
    styles,
    placeholder = "Select",
    label = "label",
  } = { ...details };
  const { headStyles } = { ...styles };
  const { startIcon, isChips, isDisplayAll, isClearable, chipType } = {
    ...headProps,
  };
  const onFocus = (e) => {
    e.stopPropagation();
    handleFocus();
  };
  const handleNone = () => { };
  const { labels } = { ...getLabels(checkedOptions, label) };
  const getGridWidth = () => {
    const len = labels?.length;

    let gWidth = 0
    const labelLen = [[100000, 60], [10000, 50], [1000, 40], [100, 30], [10, 25], [1, 0]]
    labelLen.forEach((item) => {
      if (item[0] >= len)
        gWidth = item[1]
    })
    return gWidth
  };
  return (
    <>
      <MultiSelectField
        isDisabled={isDisabled}
        isError={isError}
        style={headStyles}
        className="nspira__multi-select--head"
        onClick={isDisabled ? handleNone : (e) => onFocus(e)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.code === "ArrowDown") {
            !isDisabled && handleFocus();
          }
        }}
        tabIndex={0}
        gridWidth={getGridWidth()}
      >
        <Flex styles={{ justifyContent: "flex-start" }}>
          {startIcon}
          <Field
            data={labels}
            placeholder={placeholder}
            isChips={isChips}
            isDisplayAll={isDisplayAll}
            cData={checkedOptions}
            chipType={chipType}
          />
        </Flex>
        <div className="nspira__multi-select--counter">
          <Counter isDisplayAll={isDisplayAll} />
        </div>
        <Flex className="nspira__multi-select--clear">
          {isClearable && labels?.length && <Clear type="multi" />}
        </Flex>
        <Navigator />
      </MultiSelectField>
    </>
  );
}

export default SelectHead;
