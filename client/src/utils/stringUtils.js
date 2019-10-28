export const valueToCamelCase = value =>
  value.replace(/_\w/g, m => m[1].toUpperCase());

const changeObjectCasing = (obj, valueMapper) =>
  Object.keys(obj).reduce(
    (newObj, key) => ({
      ...newObj,
      [valueMapper(key)]: obj[key],
    }),
    {},
  );

export const objectToCamelCase = obj => changeObjectCasing(obj, valueToCamelCase);

export const objectListToCamelCase = objects =>
  objects.map(obj => objectToCamelCase(obj));

export const formatApiResponse = response =>
  (Array.isArray(response)
    ? objectListToCamelCase(response)
    : objectToCamelCase(response));


export const valueToSnakeCase = value => value.match(/([a-z]+)|([A-Z][a-z]+)/g).map(s => s.toLowerCase()).join('_');

export const objectToSnakeCase = obj => changeObjectCasing(obj, valueToSnakeCase);

export const formatBody = body => objectToSnakeCase(body);
