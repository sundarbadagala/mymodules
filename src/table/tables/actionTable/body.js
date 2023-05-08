import React, { useContext, useState } from "react";
import { TableContext } from "../../contextApi";
import { BasicTable } from "../../index";
import Icons from '../../elements/icons'
import { renderBodyCell } from "./helper";

function Body() {
  const { data, fields, styles, collapsibleFields, handleCallbacks } =
    useContext(TableContext);
  const [isShow, setIsShow] = useState(false);
  const [dataId, setDataId] = useState("");
  const handleCollapse = (id) => {
    setIsShow((prev) => !prev);
    setDataId(id);
  };
  return (
    <>
      {data &&
        data.map((dataItem, i) => {
          return (
            <tbody
              key={i}
              className="nspira__t--ac-tbody"
              style={styles?.tbody}
            >
              <tr className="nspira__t--ac-tbody-tr">
                {fields.map((field, j) => (
                  <td
                    key={j}
                    className="nspira__t--ac-tbody-tr-td"
                    style={styles?.td}
                  >
                    {field?.render ? (
                      field?.render(dataItem, field, handleCallbacks)
                    ) : field.fieldType === "collapse" ? (
                      <button
                        onClick={() => handleCollapse(i)}
                        className="nspira__t--ac-collapse-btn"
                      >
                        <Icons type='collapse'/>
                      </button>
                    ) : (
                      renderBodyCell(field, dataItem, field?.styles)
                    )}
                  </td>
                ))}
              </tr>
              {isShow && dataId == i && (
                <tr>
                  <td colSpan="10">
                    <BasicTable data={[dataItem]} fields={collapsibleFields} />
                  </td>
                </tr>
              )}
            </tbody>
          );
        })}
    </>
  );
}

export default Body;
