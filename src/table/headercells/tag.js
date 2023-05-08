import React from "react";
import "./styles.css";

function Tag({ item }) {
  const { header, headerTag, styles } = { ...item };
  return (
    <div
      className="nspira__t--hc-container nspira__t--hc-tag-container"
      style={styles?.header}
    >
      <span className="nspira__t--hc-tag-header">{header}</span>
      <i className="nspira__t--hc-tag-title"> {headerTag}</i>
    </div>
  );
}

export default Tag;
