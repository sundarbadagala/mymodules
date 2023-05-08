import React, { useContext } from "react";
import { TableContext } from "../contextApi";
import "./styles.css";

function CheckBox({ data, styles }) {
  const { handleCheck } = useContext(TableContext);
  const handleChange = (e) => {
    handleCheck(e.target.checked, data, data?._id);
  };
  return (
    <div className="nspira__table--flex nspira__t--bc-checkbox-cotainer" style={styles}>
      <input
        type="checkbox"
        onChange={(e) => handleChange(e)}
        checked={data?.isChecked}
        className="nspira__t--bc-checkbox"
      />
    </div>
  );
}

export default CheckBox;
