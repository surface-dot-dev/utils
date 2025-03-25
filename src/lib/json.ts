export const safeJsonParse = (str: string, fallback: any = null): any => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return fallback;
  }
};
