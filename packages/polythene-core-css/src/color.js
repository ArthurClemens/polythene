
export const hex = value => {
  const bigint = parseInt(value.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return r + "," + g + "," + b;
};

export const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;
