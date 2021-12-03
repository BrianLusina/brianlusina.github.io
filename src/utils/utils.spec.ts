import { camelCaseObjectKeys, snakeCaseObjectKeys, sluggify, isEmailValid } from './utils';

describe('Utils', () => {
  describe('camelCaseObjectKeys', () => {
    it('should return an object with camelCase keys', () => {
      const input = {
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
      };
      const expected = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
      };
      const result = camelCaseObjectKeys(input);
      expect(result).toEqual(expected);
    });
  });

  describe('snakeCaseObjectKeys', () => {
    it('should return an object with snakeCase keys', () => {
      const input = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
      };
      const expected = {
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
      };
      const result = snakeCaseObjectKeys(input);
      expect(result).toEqual(expected);
    });
  });

  describe('sluggify', () => {
    it('should return a sluggified string', () => {
      const input = 'Foo Bar';
      const expected = 'foo-bar';
      const result = sluggify(input);
      expect(result).toEqual(expected);
    });
  });

  describe('isEmailValid', () => {
    it('should return false for invalid emails', () => {
      const invalidEmail = 'johndoe@';
      const result = isEmailValid(invalidEmail);
      expect(result).toEqual(false);
    });

    it('should return true for valid emails', () => {
      const validEmail = 'johndoe@example.com';
      const result = isEmailValid(validEmail);
      expect(result).toEqual(true);
    });
  });
});
