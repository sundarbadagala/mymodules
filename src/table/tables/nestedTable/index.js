/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { TableContext } from "../../contextApi";
import Table from "./table";
import { useStore } from "../../hooks";

function Index(props) {
  const { data, fields, styles } = props;
  useStore(props);
  return (
    <div className="nspira__t--ns-container" style={styles?.container}>
      <Table fields={fields} data={data} />
    </div>
  );
}
export default Index;
