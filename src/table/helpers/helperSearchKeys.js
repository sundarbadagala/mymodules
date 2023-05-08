const helperSearchKeys = (() => {
  let searchKeys = [];
  return (value, key) => {
    const val = searchKeys.filter((item) => item.key === key);
    if (val.length === 0) {
      searchKeys = [...searchKeys, { value, key }];
      return searchKeys;
    } else {
      searchKeys = searchKeys.map((item) =>
        item.key === key ? { ...item, value } : item
      );
      return searchKeys;
    }
  };
})();

export default helperSearchKeys;
