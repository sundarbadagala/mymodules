import React,{useContext} from "react";
import {TableContext} from '../../contextApi'
import Body from "./body";
import "./styles.css";

function NestedTableIndex({ data, fields, count = 1 }) {
const {styles} = useContext(TableContext)
  return (
    <table
      className={`nspira__t--ns--table nspira__t--ns--table_${count}`}
      style={styles?.table}
    >
      {fields?.map((field, index) => {
        return <Body key={index} field={field} data={data} count={count} />;
      })}
    </table>
  );
}

export default NestedTableIndex;
