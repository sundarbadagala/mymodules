import React from "react";

function Default({ data, field, styles }) {
  return (
    <div style={styles} className="nspira_t-bd-default">
      {String(data[field])}
    </div>
  );
}

export default Default;
