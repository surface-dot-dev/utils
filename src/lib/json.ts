export const safeJsonParse = (str: string, fallback: any = null): any => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return fallback;
  }
};

export const safeJsonStringify = (obj: any, fallback: any = null): any => {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    return fallback;
  }
};
