import React, { useContext, useState, useEffect } from "react";
import { ListContainer, OptionContainer } from "../styles";
import NoData from "../elements/no-data";
import { SelectContext } from "../contextApi";
import SelectAll from "../elements/select-all";
import SearchField from '../elements/search'
import DataList from '../elements/data-list'

function MultiSelectBody() {
  const {
    details,
    fitlersData: filterData,
    searchKey,
    handleFocus,
    handleCheck,
    handleCheckAll,
    isCheckedAll,
  } = useContext(SelectContext);
  const {
    dependencyLabel,
    styles,
    searchProps,
  } = { ...details };
  const { bodyStyles } = { ...styles };
  const { isSearchEnable = true } = { ...searchProps };
  const [activeId, setActiveId] = useState(-1);
  const [listBoxWidth, setListBoxWidth] = useState(0);
  const handleEnterSelect = () => {
    if (activeId.toString() === "0") {
      handleCheckAll(!isCheckedAll);
    } else {
      const item = { ...filterData[activeId - 1] };
      const isChecked = !item?.isChecked;
      handleCheck(isChecked, item, item?.idx);
    }
  };
  const handleKey = (e) => {
    if (e.key === "ArrowDown" || e.code === "ArrowDown") {
      activeId < filterData.length && setActiveId((prev) => prev + 1);
    } else if (e.key === "ArrowUp" || e.code === "ArrowUP") {
      activeId > -1 && setActiveId((prev) => prev - 1);
    } else if (e.key === "Enter" || e.code === "Enter") {
      handleEnterSelect();
    } else if (e.key === "Escape" || e.code === "Escape") {
      handleFocus();
    } else if (e.key === "Tab" || e.code === "Tab") {
      handleFocus();
    }
  };
  useEffect(() => {
    const oLenght = document.getElementsByClassName(
      "nspira__select--multi-select--options"
    );
    setListBoxWidth(oLenght[0].offsetWidth);
    return () => {
      localStorage.removeItem("nspira_select");
    };
  }, []);
  return (
    <>
      <ListContainer className="nspira__select--multi-select--body">
        {isSearchEnable && (
          <SearchField
            handleKey={handleKey}
            className="nspira__select--multi-select--search"
          />
        )}
        <OptionContainer
          style={bodyStyles}
          className="nspira__select--multi-select--options"
        >
          {filterData.length ? (
            <>
              {searchKey === "" && (
                <SelectAll
                  id={filterData?.length + 1}
                  activeId={activeId}
                  listWidth={listBoxWidth}
                />
              )}
              <DataList type='multi-select' activeId={activeId} listWidth={listBoxWidth}/>
            </>
          ) : (
            <NoData>{dependencyLabel}</NoData>
          )}
        </OptionContainer>
      </ListContainer>
    </>
  );
}
export default MultiSelectBody;
