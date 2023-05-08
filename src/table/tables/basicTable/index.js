import React from "react";
import Body from "./body";
import Headers from "./headers";
import {useStore} from '../../hooks'
import "./styles.css";


function Index(props) {
  const { styles } = props;
  useStore(props)
  return (
    <div className='nspira__t-bs-table-container' style={styles?.container}>
    <table className="nspira__t-bs-table" style={styles?.table}>
      <Headers />
      <Body />
    </table>
    </div>
  );
}
export default Index;
