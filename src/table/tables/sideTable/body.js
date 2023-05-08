import React, { useContext } from "react";
import { TableContext } from "../../contextApi";
import List from '../../elements/list'

function SideTableBody({ field, data = [], styles }) {
  const { handleTooltip } = useContext(TableContext);
  return (
    <tbody className="nspira__t--sd-tbody" style={styles?.tbody}>
      <tr className="nspira__t--sd-tbody-tr" style={styles?.tr}>
        <th className="nspira__t--sd-tbody-th" style={styles?.th}>
          {field?.header}
        </th>
        {data?.map((item, index) => {
          const isArr = Array.isArray(item);
          return (
            <td key={index} className={`nspira__t--sd-tbody-td ${isArr && 'nspira__t--sd-table-td-arr'}`}>
              {isArr ? (
                <List items={item} handleTooltip={handleTooltip} />
              ) : (
                String(item)
              )}
            </td>
          );
        })}
      </tr>
    </tbody>
  );
}

export default SideTableBody;