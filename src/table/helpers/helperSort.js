function helperSort(D, field, orderBy = "asc") {
  if (orderBy === "asc" || orderBy === "des") {
    const data = JSON.parse(JSON.stringify(D));
    const sortedData = [...data]?.sort((a, b) => {
      let a1 = a[field]?.toLowerCase(),
        b1 = b[field]?.toLowerCase();
      if (a1 < b1) {
        return orderBy === "asc" ? -1 : 1;
      }
      if (a1 > b1) {
        return orderBy === "asc" ? 1 : -1;
      }
      return 0;
    });
    return sortedData;
  } else {
    return D;
  }
}
export default helperSort;
