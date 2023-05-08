/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getCustomLabel } from "./helpers/getCustomLabel";
import _search from './utils/_search'

const SelectContext = React.createContext();

function SelectProvider({ children }) {
  const [details, setDetails] = useState({});
  const [option, setOption] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [data, setData] = useState([]);
  const [preId, setPreId] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [tooltip, setTooltip] = useState({
    isDisplay: false,
    x: 0,
    y: 0,
    value: ''
  })

  useEffect(() => {
    const { onChange } = { ...details };
    if (option === "") {
      onChange && onChange("");
    }
  }, [option]);

  const handleDetails = (data) => {
    if (data) {
      setDetails({ ...data });
    }
  };
  const handleOption = (option) => {
    setOption(option);
  };
  const handleCheckedOptions = (opts) => {
    setCheckedOptions(opts);
  };
  const handleIsEnable = (boolean) => {
    setIsEnable(boolean);
  };
  const handleData = (data) => {
    setData(data);
  };
  const handleSingleSelect = (item, id) => {
    const { onChange, keys = "value" } = { ...details };
    onChange(item?.[keys], item);
    const updatedData = [...data];
    updatedData[preId] = { ...data[preId], isHighlight: false };
    updatedData[id] = { ...data[id], isHighlight: true };
    setPreId(id);
    setData(updatedData);
    setIsEnable(false);
    setTooltip({
      ...tooltip,
      isDisplay:false
    })
  };
  const handleSearch = (key) => {
    setSearchKey(key);
  };
  const getFilterData = () => {
    const { label = "label", searchProps, customLabel } = { ...details };
    if (searchKey.length) {
      if (customLabel) {
        let customData = data.map((item) => {
          const cLabel = getCustomLabel(customLabel, item);
          return { ...item, customLabel: cLabel };
        });
        return _search(searchProps, customData, 'customLabel', searchKey)
      } else {
        return _search(searchProps, data, label, searchKey)
      }
    } else {
      return data;
    }
  };
  const handleFocus = () => {
    setIsEnable((prev) => !prev);
    setSearchKey("");
  };
  const handleCheck = (isChecked, item, id) => {
    const { onChange, keys = "value" } = { ...details };
    const newData = [...data];
    if (isChecked) {
      newData[id] = { ...item, isChecked: true };
      setData(newData);
      const newCheckedData = [...checkedOptions, item];
      setCheckedOptions(newCheckedData);
      onChange(
        newCheckedData.map((item) => item?.[keys]),
        newCheckedData
      );
      const isAllChecked = newData.every((item) => item.isChecked === true);
      if (isAllChecked) {
        handleCheckAll(true);
      }
    } else {
      newData[id] = { ...item, isChecked: false };
      setData(newData);
      const newCheckedData = checkedOptions.filter((item) => item.idx !== id);
      setCheckedOptions(newCheckedData);
      onChange(
        newCheckedData.map((item) => item?.[keys]),
        newCheckedData
      );
      setIsCheckedAll(false);
    }
  };
  const handleCheckAll = (isChecked) => {
    const { onChange, keys = "value" } = { ...details };
    if (isChecked) {
      setData(data.map((item) => ({ ...item, isChecked: true })));
      setCheckedOptions(data);
      onChange(
        data.map((item) => item?.[keys]),
        data
      );
      setIsCheckedAll(true);
    } else {
      setData(data.map((item) => ({ ...item, isChecked: false })));
      setCheckedOptions([]);
      onChange([]);
      setIsCheckedAll(false);
    }
  };
  const handleIsCheckedAll = (boolean) => {
    setIsCheckedAll(boolean);
  };
  const handleTooltip = (e, value, isDisplay) => {
    if (tooltip.isDisplay !== isDisplay) {
      const {bodyProps} = {...details} 
      const {x = 0, y = 0} = {...bodyProps?.tooltipPositions}
      setTooltip({
        ...tooltip,
        isDisplay: isDisplay,
        x: e?.clientX + x + 10,
        y: e?.clientY + y,
        value: value,
      })
    }
  }
  return (
    <SelectContext.Provider
      value={{
        data,
        details,
        option,
        fitlersData: getFilterData(),
        checkedOptions,
        isEnable,
        handleDetails,
        handleOption,
        handleIsEnable,
        handleCheckedOptions,
        handleData,
        handleSingleSelect,
        handleSearch,
        handleFocus,
        handleCheck,
        handleCheckAll,
        searchKey,
        isCheckedAll,
        handleIsCheckedAll,
        handleTooltip,
        tooltip
      }}
    >
      {children}
    </SelectContext.Provider>
  );
}

export { SelectContext, SelectProvider };
