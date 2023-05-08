import React from "react";

function Tag({ data, field, item }) {
    const {text, value, styles} = {...item.tagProps}
  return (
    <div>
      {data[field]}
      <div style={{fontSize:'12px', color:'#637381', ...styles}}>
      {
        value ? String(data[value]) : text
      }
      </div>
    </div>
  );
}

export default Tag;
