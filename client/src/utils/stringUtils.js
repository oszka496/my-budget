export const valueToCamelCase = value =>
  value.replace(/_\w/g, m => m[1].toUpperCase());

export const objectToCamelCase = obj =>
  Object.keys(obj).reduce(
    (newObj, key) => ({
      ...newObj,
      [valueToCamelCase(key)]: obj[key],
    }),
    {},
  );

export const objectListToCamelCase = objects =>
  objects.map(obj => objectToCamelCase(obj));

export const formatApiResponse = response =>
  (Array.isArray(response)
    ? objectListToCamelCase(response)
    : objectToCamelCase(response));
