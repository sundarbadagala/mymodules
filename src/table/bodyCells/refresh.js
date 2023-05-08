import React, { useContext } from "react";
import { TableContext } from "../contextApi";
import Icons from "../elements/icons";
import Button from "../elements/button";
import "./styles.css";

function Refresh({ data, field, item, _id, styles }) {
  const { handleRefreshAll } = useContext(TableContext);
  return (
    <div
      className="nspira__table--flex nspira__t-bc-refresh-container"
      style={styles}
    >
      <Button
        onClick={handleRefreshAll}
        className="nspira__t-bd-refresh-btn"
      >
        <Icons type='refresh' />
      </Button>
    </div>
  );
}

export default Refresh;
