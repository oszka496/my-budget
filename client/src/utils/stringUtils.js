export const valueToCamelCase = value =>
  value.replace(/_\w/g, m => m[1].toUpperCase());

export const objectToCamelCase = obj => {
  return Object.keys(obj).reduce(
    (newObj, key) => ({
      ...newObj,
      [valueToCamelCase(key)]: obj[key],
    }),
    {}
  );
};

export const objectListToCamelCase = objects =>
  objects.map(obj => objectToCamelCase(obj));
