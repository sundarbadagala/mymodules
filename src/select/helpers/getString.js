/* eslint-disable array-callback-return */

export const getString = (cLabel, item) => {
  if (typeof cLabel === "function") {
    const { props } = cLabel(item);
    const { children } = { ...props };
    return getVal(children).join('');
  }
};

const getVal = (component, arr = []) => {
  const type = typeof component;
  const Arr = [...arr];
  if (type === "string") {
    return component;
  } else if (type === "number") {
    return component;
  } else if (type === "object") {
    if (Array.isArray(component)) {
      component.map((item) => {
        if (typeof item === "string" || typeof item === "number") {
          Arr.push(item);
        } else {
          return Arr.push(getVal(item, Arr));
        }
      });
    } else {
      for (let key in component) {
        if (key === "props") {
          return getVal(component["props"]["children"], Arr);
        }
      }
    }
  }
  return Array.from(new Set(Arr.flat()));
};
