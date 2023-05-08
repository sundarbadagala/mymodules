import React, { useContext } from "react";
import { SelectContext } from "../contextApi";
import { IconWrapper, NavIcon } from "../styles";
import UpArrow from "../assets/up_arrow.svg";
import DownArrow from "../assets/down_arrow.svg";

function Navigators() {
  const { details, isEnable } = useContext(SelectContext);
  const { headProps } = { ...details };
  const { upIcon, downIcon } = { ...headProps };
  return (
    <IconWrapper>
      {isEnable ? (
        upIcon ? (
          upIcon
        ) : (
          <NavIcon
            src={UpArrow}
            alt="up arrow"
            className="nspira__select--navicon-up"
          />
        )
      ) : downIcon ? (
        downIcon
      ) : (
        <NavIcon
          src={DownArrow}
          alt="down arrow"
          className="nspira__select--navicon-down"
        />
      )}
    </IconWrapper>
  );
}

export default Navigators;
