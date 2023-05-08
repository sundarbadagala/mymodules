function helperDebounce(fn, delay) {
  let timer;
  return function () {
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
export default helperDebounce;
