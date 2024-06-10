export const generatePath = (path, params) => {
  let generatedPath = path;
  for (const key in params) {
    generatedPath = generatedPath.replace(`:${key}`, params[key]);
  }
  return generatedPath;
};