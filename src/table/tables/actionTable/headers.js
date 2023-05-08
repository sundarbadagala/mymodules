import React, { useContext } from "react";
import { TableContext } from "../../contextApi";
import { renderHeaderCell } from "./helper";

function Header() {
  const { fields, styles } = useContext(TableContext);
  return (
    <thead
      style={{ backgroundColor: "red" }}
      className="nspira__t--ac-thead"
      style={styles?.thead}
    >
      <tr className="nspira__t--ac-thead-tr" style={styles?.tr}>
        {fields &&
          fields.map((item, index) => (
            <th
              key={index}
              className={`nspira__t--ac-thead-tr-th nspira__t--ac-thead-tr-th_${
                index + 1
              } `}
              width={item.width}
              style={styles?.th}
            >
              {renderHeaderCell(item)}
            </th>
          ))}
      </tr>
    </thead>
  );
}

export default Header;
