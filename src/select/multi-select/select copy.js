/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import SelectHead from "./select-head";
import SelectBody from "./select-body";
import { SelectContainer, FocusOutContainer } from "../styles";
import { SelectContext } from "../contextApi";
import { getCustomLabel } from "../helpers/getCustomLabel";

function MultiSelect() {
  const {
    details,
    handleCheckedOptions,
    checkedOptions: checkedData,
    isEnable,
    handleFocus,
    handleData,
    handleIsCheckedAll,
  } = useContext(SelectContext);
  const {
    options = [],
    value = "",
    keys = "value",
    customLabel,
    id,
  } = { ...details };

  useEffect(() => {
    if (options?.length) {
      // console.log(id, "if options", value);
      if (checkedData.length) {
        // console.log(id, "if options check");
        const checkedValues = checkedData.map((item) => item?.[keys]);
        const allOptions = [
          ...options?.map((item, index) =>
            checkedValues.includes(item?.[keys])
              ? {
                  ...item,
                  isChecked: true,
                  idx: index,
                  customLabel: getCustomLabel(customLabel, item),
                }
              : {
                  ...item,
                  isChecked: false,
                  idx: index,
                  customLabel: getCustomLabel(customLabel, item),
                }
          ),
        ];
        if (value.length) {
          // console.log(id, "if options checked value");
          const updatedData = allOptions.map((item) =>
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
          // console.log(id, "filter opts", filterOpts);
          handleData(updatedData);
          handleCheckedOptions(filterOpts);
          if (updatedData.length === filterOpts.length) {
            handleIsCheckedAll(true);
          } else {
            handleIsCheckedAll(false);
          }
        } else {
          // console.log(id, "if options check else value");
          handleData(allOptions);
          handleCheckedOptions(
            allOptions.filter((item) => item.isChecked === true)
          );
        }
      } else {
        // console.log(id, "if options else check");
        const allOptions = [
          ...options?.map((item, index) => ({
            ...item,
            isChecked: false,
            idx: index,
            customLabel: getCustomLabel(customLabel, item),
          })),
        ];

        if (value.length) {
          // console.log(id, "if options else check if value", value);
          const updatedData = allOptions.map((item) =>
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
          handleData(updatedData);
          handleCheckedOptions(filterOpts);
          if (updatedData.length === filterOpts.length) {
            handleIsCheckedAll(true);
          } else {
            handleIsCheckedAll(false);
          }
        } else {
          // console.log(id, "if options else check else value");
          handleData(allOptions);
          handleCheckedOptions([]);
        }
      }
    } else {
      // console.log(id, "else options");
      handleData([]);
      handleCheckedOptions([]);
    }
  }, [options, value]);
  return (
    <>
      {isEnable && <FocusOutContainer onClick={handleFocus} />}
      <SelectContainer isEnable={isEnable}>
        <SelectHead />
        {isEnable && <SelectBody />}
      </SelectContainer>
    </>
  );
}

export default MultiSelect;
