import React from "react";
import Body from "./body";
import Tooltip from '../../elements/tooltip'
import "./styles.css";


function Index(props) {
  const { data, fields, styles } = props;
  return (
    <div className="nspira__t--sd-container" style={styles?.container}>
      <Tooltip/>
      <table className="nspira__t--sd-table" style={styles?.table}>
        {fields?.map((field, index) => {
          const filterData = data.map((item) => item[field.field]);
          return (
            <Body key={index} field={field} data={filterData} styles={styles} />
          );
        })}
      </table>
    </div>
  );
}
export default Index;
