/* eslint-disable array-callback-return */

export const getCustomLabel = (cLabel, item) => {
  if (typeof cLabel === "function") {
    const { props } = cLabel(item);
    const { children } = { ...props };
    if(Array.isArray(getString(children))){
      return getString(children).join(' ')
    }else{
      return getString(children)
    }
  }
};

const getString = (component, arr = []) => {
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
          return Arr.push(getString(item, Arr));
        }
      });
    } else {
      for (let key in component) {
        if (key === "props") {
          return getString(component["props"]["children"], Arr);
        }
      }
    }
  }
  return Array.from(new Set(Arr.flat()));
};
