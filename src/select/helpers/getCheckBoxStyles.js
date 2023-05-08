import { getStyleStates } from "./getStyleStates";
import { defStyles, slctStyles } from "../theme/checkbox.styles";

export const getCheckBoxStyles = (styles) => {
  const { checkBoxStyles } = { ...styles };
  const { defaultStyles, selectStyles } = getStyleStates(
    checkBoxStyles,
    defStyles,
    slctStyles
  );
  return { defaultStyles, selectStyles };
};
