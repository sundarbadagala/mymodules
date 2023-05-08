export const getPositions = (positions, inSizes, list) => {
  const listHeight = list?.length * 40;
  const bottomHeight = inSizes?.y - positions?.y;
  const topHeight =
    bottomHeight < listHeight &&
    (inSizes?.y - listHeight > 64 ? inSizes?.y - listHeight : 64);
  const leftHeight = inSizes?.x - positions?.x > 100 && positions?.x - 50;
  const rightHeight = inSizes?.x - positions?.x < 100 && 0;

  return { leftHeight, rightHeight, topHeight, bottomHeight };
};
