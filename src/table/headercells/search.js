import React, { useContext, useState } from "react";
import { TableContext } from "../contextApi";
import Icons from "../elements/icons";
import Button from "../elements/button";

function Search({ item }) {
  const { handleSearch, handleClearSearch } = useContext(TableContext);
  const { header, styles } = item;
  const [show, setShow] = useState(false);
  const handleSearchClear = () => {
    handleClearSearch();
    setShow((prev) => !prev);
  };
  return (
    <>
      {show ? (
        <div
          className="nspira__t--hc--search-hide nspira__t--hc-search-container nspira__t--hc-container"
          style={styles?.header}
        >
          <input
            autoFocus
            type="text"
            placeholder={header}
            onChange={(e) => handleSearch(e.target.value, item.field)}
            className="nspira__t--hc--search-input"
          />
          <Button
            className="nspira__t--hc--close-btn"
            onClick={handleSearchClear}
          >
            <Icons type='close' />
          </Button>
        </div>
      ) : (
        <div
          className="nspira__t--hc--search-show nspira__t--hc-search-container nspira__t--hc-container"
          style={styles?.header}
        >
          <span
            className="nspira__t--hc--search-tag"
          >
            {header}{" "}
          </span>
          <Button
            className="nspira__t--hc--search-btn"
            onClick={() => setShow((prev) => !prev)}
          >
            <Icons type='search' />
          </Button>
        </div>
      )}
    </>
  );
}

export default Search;
