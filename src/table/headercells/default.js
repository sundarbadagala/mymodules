import React from "react";

function Default({ item }) {
  const { header, styles } = { ...item };
  return <div style={styles?.header} className='nspira__t-hc-default'>{String(header)}</div>;
}

export default Default;
