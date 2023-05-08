import React, { useContext } from "react";
import { TableContext } from '../../contextApi'
import Table from "./table";
import List from "../../elements/list";

function SideTableBody({ field, data = [], count }) {
  const { styles } = useContext(TableContext)
  const isString = typeof field?.header === "string" ? true : false;
  return (
    <tbody
      className={`nspira__t--ns-tbody nspira__t--ns-tbody_${count}`}
      style={styles?.tbody}
    >
      <tr
        className={`nspira__t--ns-tbody-tr nspira__t--ns-tbody-tr_${count}`}
        style={styles?.tr}
      >
        {isString && (
          <th
            className={`nspira__t--ns-tbody-tr-th nspira__t--ns-tbody-tr-th_${count}`}
            style={styles?.th}
          >
            {field?.header}
          </th>
        )}

        {isString ? (
          <>
            {typeof field.field === "string" ? (
              data?.map((item, index) => {
                const isArr= Array.isArray(item[field.field])
                return (
                  <td
                    key={index}
                    className={`nspira__t--ns-tbody-tr-td nspira__t--ns-tbody-tr-td_${count} ${isArr && 'nspira__t-ns-tbody-td-list'}`}
                    style={styles?.td}
                  >
                    {
                     isArr  ? <List items={item[field.field]} /> : item[field.field]
                    }
                  </td>
                )
              })
            ) : (
              <td
                className={`nspira__t--ns-tbody-tr-td nspira__t--ns-tbody-tr-td_${count}`}
                style={styles?.td}
              >
                <Table data={data} fields={field.field} count={count + 1} />
              </td>
            )}
          </>
        ) : (
          <td
            colSpan={isString ? 0 : 9}
            className={`nspira__t--ns-tbody-tr-td nspira__t--ns-tbody-tr-td_${count}`}
            style={styles?.td}
          >
            <Table data={data} fields={field.header} count={count + 2} />
          </td>
        )}
      </tr>
    </tbody>
  );
}

export default SideTableBody;
