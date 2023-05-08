import { getStyleStates } from "./getStyleStates";
import { defStyles, slctStyles, hvrStyles } from "../theme/label.styles";

export const getLabelStyles = (styles) => {
  const { labelStyles } = { ...styles };
  const { defaultStyles, selectStyles, hoverStyles } = getStyleStates(
    labelStyles,
    defStyles,
    slctStyles,
    hvrStyles
  );
  return { defaultStyles, selectStyles, hoverStyles };
};
