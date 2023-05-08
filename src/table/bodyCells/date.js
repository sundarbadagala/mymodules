import React from "react";
import { getFullTime } from "../utils/time/getFullTime";

function Time({ data, item }) {
  const { dateProps, styles, field } = { ...item };
  const { format = ["D", "M", "Y"], seperator = "/" } = { ...dateProps };
  const nDate = new Date(data[field]);
  const val = getFullTime(nDate);
  const output = format.map((item) => {
    if (val[item]) {
      return val[item];
    }
  });
  return <div style={styles?.field}>{output.join(`${seperator}`)}</div>;
}

export default Time;
