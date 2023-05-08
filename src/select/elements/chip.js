import React, { useContext } from "react";
import { Chip, Icon } from "../styles";
import CloseIcon from "../assets/close.svg";
import { SelectContext } from "../contextApi";

function ChipLabel({ children, obj, onUnselect, type }) {
  const { details } = useContext(SelectContext);
  const { styles, headProps } = { ...details };
  const { chipStyles } = { ...styles };
  const { chipCloseIcon } = { ...headProps };
  const { container, close, title } = { ...chipStyles };
  return (
    <Chip
      type={type}
      style={container}
      className="nspira__select--chip-container"
    >
      <div className="nspira__select--chip-title" style={title}>
        {children}
      </div>
      <div
        onClick={(e) => onUnselect(e, false, obj, obj?.idx)}
        className="nspira__select--chip-close"
        style={close}
      >
        {chipCloseIcon ? (
          chipCloseIcon
        ) : (
          <Icon
            src={CloseIcon}
            alt="close"
            className="nspira__select--chip-close-icon"
          />
        )}
      </div>
    </Chip>
  );
}

export default ChipLabel;
