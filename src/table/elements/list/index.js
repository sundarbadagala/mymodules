import React from 'react'
import './styles.css'

const List = ({ items, handleTooltip }) => {
    return (
      <ul className="nspira__t-sd-td-list">
        {items.map((item, index) => (
          <li
            key={index}
            className="nspira__t-sd-td-list-item"
            onMouseOver={(e) => handleTooltip(e)}
            onMouseOut={() => handleTooltip("")}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };
  
export default List