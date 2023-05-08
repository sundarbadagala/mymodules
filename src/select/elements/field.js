import React, { useContext } from "react";
import Chip from "./chip";
import { SelectContext } from "../contextApi";
import { ChipLess, FieldContainer } from "../styles";

function Field({
  data = [],
  placeholder = "Select",
  isChips = false,
  isDisplayAll = false,
  cData = [],
  chipType,
}) {
  const { handleCheck, details } = useContext(SelectContext);
  const { isDisabled, isError } = details;
  const handleUnselect = (e, bool, ob, idx) => {
    e.stopPropagation();
    handleCheck(bool, ob, idx);
  };
  const getFields = () => {
    if (isChips && isDisplayAll) {
      return (
        <>
          {data.map((item, index) => (
            <Chip
              obj={cData[index]}
              key={index}
              onUnselect={handleUnselect}
              type={chipType}
            >
              {item}
            </Chip>
          ))}
        </>
      );
    } else if (isChips && !isDisplayAll) {
      return (
        <Chip obj={cData[0]} onUnselect={handleUnselect} type={chipType}>
          {data[0]}
        </Chip>
      );
    } else if (!isChips && isDisplayAll) {
      return (
        <>
          {data.map((item, index) => (
            <ChipLess key={index} className='nspira__select--default-label-display-all'>{item}, </ChipLess>
          ))}
        </>
      );
    } else {
      return <ChipLess className='nspira__select--default-label-not-display-all'>{data[0]}</ChipLess>;
    }
  };
  return (
    <FieldContainer
      isDisabled={isDisabled}
      isError={isError}
      isActive={data.length > 0}
      className='nspira__select--field-container'
      isChips={isChips}
    >
      {data.length ? getFields(): placeholder}
    </FieldContainer>
  );
}

export default Field;
