import React, { useState, useContext } from "react";
import { TableContext } from "../contextApi";
import Icons from '../elements/icons'
import Button from '../elements/button'

function Dropdown({ item }) {
  const { header, dropdownList = [], field, styles } = item;
  const { handleSelect } = useContext(TableContext);
  const [isShow, setIsShow] = useState(false);
  const handleOptionSelect = (value) => {
    handleSelect(value, field);
    setIsShow((prev) => !prev);
  };
  return (
    <div className="nspira__t--hc-dropdown-container" style={styles?.header}>
      {header}
      <Button
        className='nspira__t-hc-dropdown-btn'
        onClick={() => setIsShow((prev) => !prev)}
      >
        {isShow ? (
          <Icons type='arrow-up'/>
        ) : (
          <Icons type='arrow-down'/>
        )}
      </Button>
      {isShow && (
        <div className="nspira__t--hc-dropdown-list">
          <div
            className="nspira__t--hc-dropdown-option"
            onClick={() => handleOptionSelect("all")}
          >
            All
          </div>
          {dropdownList.map((item, index) => (
            <div
              key={index}
              className="nspira__t--hc-dropdown-option"
              onClick={() => handleOptionSelect(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
