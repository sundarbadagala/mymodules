import React from "react";
import SingleSelect from "./single-select";
import MultiSelect from "./multi-select";
import { SelectProvider } from "./contextApi";

function Select(props) {
  const { isMulti = false, ...rest } = props;
  const getSelect = () => {
    switch (isMulti) {
      case true:
        return <MultiSelect {...rest} />;
      case false:
        return <SingleSelect {...rest} />;
      default:
        return <div>invalid value</div>;
    }
  };
  return <SelectProvider>{getSelect(isMulti)}</SelectProvider>;
}
export default Select;
