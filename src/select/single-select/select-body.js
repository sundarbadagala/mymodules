import React, { useContext, useEffect, useState } from "react";
import { ListContainer, OptionContainer } from "../styles";
import NoData from "../elements/no-data";
import { SelectContext } from "../contextApi";
import SearchField from '../elements/search'
import DataList from '../elements/data-list'

function SingleSelectBody() {
  const {
    details,
    handleSingleSelect,
    fitlersData: data,
    handleFocus,
  } = useContext(SelectContext);
  const {
    dependencyLabel = "",
    styles,
    searchProps,
  } = { ...details };
  const { bodyStyles } = { ...styles };
  const { isSearchEnable = true } = { ...searchProps };
  const [activeId, setActiveId] = useState(0);
  const [listBoxWidth, setListBoxWidth] = useState(0);
  const handleKey = (e) => {
    if (e.key === "ArrowDown" || e.code === "ArrowDown") {
      activeId < data.length && setActiveId((prev) => prev + 1);
    } else if (e.key === "ArrowUp" || e.code === "ArrowUP") {
      activeId > 1 && setActiveId((prev) => prev - 1);
    } else if (e.key === "Enter" || e.code === "Enter") {
      handleSingleSelect(data[activeId - 1], activeId - 1);
    } else if (e.key === "Escape" || e.code === "Escape") {
      handleFocus();
    } else if (e.key === "Tab" || e.code === "Tab") {
      handleFocus();
    }
  };
  useEffect(() => {
    const oLenght = document.getElementsByClassName(
      "nspira__select--single-select--options"
    );
    setListBoxWidth(oLenght[0].offsetWidth);
    return () => {
      localStorage.removeItem("nspira_select");
    };
  }, []);
  return (
    <>
      <ListContainer className="nspira__select--single-select--body">
        {isSearchEnable && (
          <SearchField
            handleKey={handleKey}
            className="nspira__select--single-select--search"
          />
        )}
        <OptionContainer
          style={{ ...bodyStyles }}
          className="nspira__select--single-select--options"
        >
          {data?.length ? (
            <DataList type='single-select' activeId={activeId} listWidth={listBoxWidth}/>
          ) : (
            <NoData>{dependencyLabel}</NoData>
          )}
        </OptionContainer>
      </ListContainer>
    </>
  );
}

export default SingleSelectBody;
