import React, { useContext } from "react";
import { TableContext } from "../../contextApi";

function Header() {
  const { fields, styles } = useContext(TableContext);
  return (
    <thead className="nspira__t-bs-thead" style={styles?.thead}>
      <tr className="nspira__t-bs-thead-tr" style={styles?.tr}>
        {fields &&
          fields.map((item, index) => (
            <th
              key={index}
              className="nspira__t-bs-thead-tr-th"
              style={styles?.th}
              width={item.width}
            >
              {item.header}
            </th>
          ))}
      </tr>
    </thead>
  );
}

export default Header;
