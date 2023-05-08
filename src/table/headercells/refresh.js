import React, { useContext } from "react";
import { TableContext } from "../contextApi";
import Button from '../elements/button'
import Icons from '../elements/icons'
import "./styles.css";

function Refresh({ item }) {
  const { handleRefreshAll } = useContext(TableContext);
  const { styles } = { ...item };
  return (
    <div className="nspira__t--flex" style={styles?.header}>
      <Button
        className="nspira__t--hc--refresh-btn"
        onClick={handleRefreshAll}
      >
        <Icons type='refresh'/>
      </Button>
    </div>
  );
}

export default Refresh;
