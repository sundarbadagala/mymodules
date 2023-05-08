export const getStyleStates = (
  styles,
  defObj = {},
  slctObj = {},
  hovObj = {}
) => {
  let colorObj = {};
  let defaultStyles = {};
  let selectStyles = {};
  let hoverStyles = {};
  for (let key in styles) {
    const value = styles[key];
    if (typeof value === "string") {
      colorObj[key] = value;
    } else if (typeof value === "object" && Array.isArray(value)) {
      value.map((el, id) => (colorObj[`${key}${id > 0 ? `.${id}` : ""}`] = el));
    }
  }
  for (let style in colorObj) {
    if (style.includes("2")) {
      hoverStyles[style.slice(0, -2)] = colorObj[style];
    } else if (style.includes("1")) {
      selectStyles[style.slice(0, -2)] = colorObj[style];
    } else {
      defaultStyles[style] = colorObj[style];
    }
  }
  for (let def in defObj) {
    if (!defaultStyles[def]) {
      defaultStyles[def] = defObj[def];
    }
  }
  for (let def in slctObj) {
    if (!selectStyles[def]) {
      selectStyles[def] = slctObj[def];
    }
  }
  for (let def in hovObj) {
    if (!hoverStyles[def]) {
      hoverStyles[def] = hovObj[def];
    }
  }
  return { defaultStyles, selectStyles, hoverStyles };
};
