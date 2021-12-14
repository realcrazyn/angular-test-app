export const ucFirst = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};

export const getNumber = (): number => {
  return +(Math.random() * 4000).toFixed(2);
};
