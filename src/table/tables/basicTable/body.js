import React, { useContext } from "react";
import { TableContext } from "../../contextApi";

function Body() {
  const { data, fields, styles } = useContext(TableContext);
  return (
    <>
      {data.map((dataItem, i) => {
        return (
          <tbody key={i} className='nspira__t-bs-tbody' style={styles?.tbody}>
            <tr className='nspira__t-bs-tbody-tr' style={styles?.tr}>
              {fields.map((item, j) => (
                <td key={j} className='nspira__t-bs-tbody-tr-td' style={styles?.td}>
                  {String(dataItem[item.field])}
                </td>
              ))}
            </tr>
          </tbody>
        );
      })}
    </>
  );
}

export default Body;
