export const cloneDeep = (obj: object) => {
  return JSON.parse(JSON.stringify(obj));
};
