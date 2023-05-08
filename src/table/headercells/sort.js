import React, { useContext, useState } from "react";
import { TableContext } from "../contextApi";
import Icons from '../elements/icons'
import Button from '../elements/button'
import "./styles.css";

const orderBy = ["asc", "des", "def"];

function Sort({ item }) {
  const { header, field, styles } = { ...item };
  const { handleSort } = useContext(TableContext);
  const [count, setCount] = useState(0);
  const onSort = (field) => {
    handleSort(field, orderBy[count]);
    setCount((prev) => (prev + 1) % 3);
  };
  return (
    <div
      className="nspira__t--hc-container nspira__t--hc-sort-container"
      style={styles?.header}
    >
      <span className="nspira__t--hc-sort-tag">
        {header}
      </span>{" "}
      <Button
        onClick={() => onSort(field)}
        className="nspira__t--hc-sort-btn"
      >
        <Icons type='sort'/>
      </Button>
    </div>
  );
}

export default Sort;
