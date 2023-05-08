import React from "react";
import "./styles.css";

function Chip({ data, field, item }) {
  const { text, value, styles } = { ...item.chipProps };
  return (
    <div className="nspira__table-bc-chip-container">
      {String(data[field])}
      <span className="nspira__table--bc-chip" style={styles}>
        {value ? (Array.isArray(data[value]) ? data[value].length : 1) : text}
      </span>
    </div>
  );
}

export default Chip;
