function search(searchProps, data, label, searchKey) {
  const { isCaseSensitive = false ,isMatchFromStart = false, isTrim = true} = {...searchProps};
  const key = isTrim ? searchKey.trim() : searchKey;
  switch (true) {
    case isCaseSensitive && isMatchFromStart:
        return data.filter((item) => item[label]?.startsWith(key));
    case !isCaseSensitive && isMatchFromStart:
        return data.filter((item) => item[label].toLowerCase()?.startsWith(key.toLowerCase()));
    case isCaseSensitive && !isMatchFromStart:
        return data.filter((item) => item[label]?.includes(key));
    case !isCaseSensitive && !isMatchFromStart:
        return data.filter((item) => item[label]?.toLowerCase()?.includes(key.toLowerCase()));
    default:
      return [];
  }
}
export default search;
