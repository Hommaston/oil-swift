import { describe, test, expect } from '@jest/globals';
import {
  validateRequired,
  validateEmail,
  validatePassword,
  validateSignUp,
  validateLogin,
} from '../src/utils/validators';

describe('validateRequired', () => {
  test('should return an error when the value is empty', () => {
    expect(validateRequired('', 'First name')).toBe('First name is required');
  });

  test('should accept a non-empty value', () => {
    expect(validateRequired('John', 'First name')).toBe('');
  });

  test('should reject whitespace-only input', () => {
    expect(validateRequired('   ', 'First name')).toBe('First name is required');
  });
});

describe('validateEmail', () => {
  test('should reject an empty email', () => {
    expect(validateEmail('')).toBe('Email is required');
  });

  test('should reject an invalid email', () => {
    expect(validateEmail('invalid-email')).toBe(
      'Enter a valid email address'
    );
  });

  test('should accept a valid email', () => {
    expect(validateEmail('user@example.com')).toBe('');
  });

  test('should reject whitespace-only email', () => {
    expect(validateEmail('   ')).toBe('Email is required');
  });
});

describe('validatePassword', () => {
  test('should reject an empty password', () => {
    expect(validatePassword('')).toBe('Password is required');
  });

  test('should reject a password shorter than 8 characters', () => {
    expect(validatePassword('1234567')).toBe(
      'Password must be at least 8 characters'
    );
  });

  test('should accept exactly 8 characters', () => {
    expect(validatePassword('12345678')).toBe('');
  });

  test('should accept more than 8 characters', () => {
    expect(validatePassword('password123')).toBe('');
  });
});

describe('validateSignUp', () => {
  test('should return errors for all empty fields', () => {
    expect(
      validateSignUp({
        fName: '',
        lName: '',
        occupation: '',
        email: '',
        password: '',
      })
    ).toEqual({
      fName: 'First name is required',
      lName: 'Last name is required',
      occupation: 'Occupation is required',
      email: 'Email is required',
      password: 'Password is required',
    });
  });

  test('should return no errors for valid signup data', () => {
    expect(
      validateSignUp({
        fName: 'John',
        lName: 'Doe',
        occupation: 'Engineer',
        email: 'john@example.com',
        password: 'password123',
      })
    ).toEqual({});
  });

  test('should return only the fields that are invalid', () => {
    expect(
      validateSignUp({
        fName: 'John',
        lName: 'Doe',
        occupation: 'Engineer',
        email: 'invalid-email',
        password: '123',
      })
    ).toEqual({
      email: 'Enter a valid email address',
      password: 'Password must be at least 8 characters',
    });
  });
});

describe('validateLogin', () => {
  test('should return errors for empty login fields', () => {
    expect(
      validateLogin({
        email: '',
        password: '',
      })
    ).toEqual({
      email: 'Email is required',
      password: 'Password is required',
    });
  });

  test('should return no errors for valid login data', () => {
    expect(
      validateLogin({
        email: 'user@example.com',
        password: 'password123',
      })
    ).toEqual({});
  });

  test('should reject invalid login data', () => {
    expect(
      validateLogin({
        email: 'invalid-email',
        password: '1234567',
      })
    ).toEqual({
      email: 'Enter a valid email address',
      password: 'Password must be at least 8 characters',
    });
  });
});