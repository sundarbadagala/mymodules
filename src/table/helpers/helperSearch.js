function helperSearch(data, arr) {
  if (arr.length === 0) {
    return data;
  }
  const initArr = arr[0];
  const { key, value } = initArr;
  const val = data.filter((item) =>
    item[key]?.toLowerCase()?.includes(value?.toLowerCase())
  );
  return helperSearch(val, arr.slice(1));
}

export default helperSearch;
