import React, { useContext } from "react";
import CloseIcon from "../assets/close.svg";
import { SelectContext } from "../contextApi";

function Clear({ type }) {
  const {handleCheckAll, handleSingleSelect } = useContext(SelectContext);
  const handleClear = (e) => {
    e.stopPropagation();
    switch (type) {
      case "multi":
        handleCheckAll(false);
        return;
      default:
        handleSingleSelect({}, -1)
        return;
    }
  };
  return (
    <>
      <img src={CloseIcon} alt="" style={{width:'1rem'}} onClick={handleClear} className='nspira__select--clear'/>
    </>
  );
}

export default Clear;
