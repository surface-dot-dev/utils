export const trimSlashes = (str: string): string => {
  return str.replace(/^\/+|\/+$/g, '');
};

export const undelimit = (str: string, delimiter: string = ','): string[] => {
  return str.split(delimiter).map((s) => s.trim());
};
