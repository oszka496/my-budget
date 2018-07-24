import { objectToCamelCase } from './stringUtils';

describe('String Utilities', () => {
  it('should replace all snake_case keys to camelCase', () => {
    const input = {
      property_one: 'Lorem Ipsum',
    };
    const output = {
      propertyOne: 'Lorem Ipsum',
    };
    expect(objectToCamelCase(input)).toEqual(output);
  });
});
