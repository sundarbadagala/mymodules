export const getLabels = (data = [], label = "label") => {
  if (data.length) {
    const textLabels = data
      ?.map((item) => item?.[label])
      .filter((item) => item !== undefined);
    const customLabels = data
      ?.map((item) => item?.customLabel)
      .filter((item) => item !== undefined);
    const labels = customLabels?.length ? customLabels : textLabels;
    return { labels, textLabels, customLabels };
  }
};
