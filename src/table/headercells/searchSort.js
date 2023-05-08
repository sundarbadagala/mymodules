import React, { useContext, useState } from "react";
import { TableContext } from "../contextApi";
import Icons from "../elements/icons";
import Button from "../elements/button";
import "./styles.css";

const orderBy = ["asc", "des", "def"];

function SearchSort({ item }) {
  const { header, field, styles } = { ...item }
  const { handleSort, handleSearch, handleClearSearch } =
    useContext(TableContext);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const onSort = (field) => {
    handleSort(field, orderBy[count]);
    setCount((prev) => (prev + 1) % 3);
  };
  const handleSearchClear = () => {
    handleClearSearch();
    setShow((prev) => !prev);
  };
  return (
    <div className="nspira__t--hc-container" style={styles?.header}>
      {show ? (
        <input
          type="text"
          autoFocus
          placeholder={header}
          onChange={(e) => handleSearch(e.target.value, item.field)}
          className='nspira__t--hc--search-input'
        />
      ) : (
        header
      )}
      <div className='nspira__t--flex nspira__t--hc--ss-icon-container'>
        <Button
          onClick={show ? handleSearchClear : () => setShow((prev) => !prev)}
          className='nspira__t-hc-ss-search-btn'
        >
          {show ? (
            <Icons type='close' />
          ) : (
            <Icons type='search' />
          )}
        </Button>
        <Button
          onClick={() => onSort(field)}
          className='nspira__t-hc-ss-sort-btn'
        >
          <Icons type='sort' />
        </Button>
      </div>
    </div>
  );
}
export default SearchSort;
