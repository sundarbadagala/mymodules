import React, { useContext } from "react";
import { TableContext } from "../contextApi";
import "./styles.css";

function CheckBox({ item }) {
  const { styles } = { ...item };
  const { handleCheckAll } = useContext(TableContext);
  const handleCheck = (e) => {
    handleCheckAll(e.target.checked);
  };
  return (
    <div className="nspira__t--flex" style={styles?.header}>
      <input
        type="checkbox"
        onChange={handleCheck}
        className="nspira__t--hc--check-all"
      />
    </div>
  );
}

export default CheckBox;
