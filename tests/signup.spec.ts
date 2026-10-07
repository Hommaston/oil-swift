import { test, expect } from '@playwright/test';

test.describe('Signup', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/sign-up');
  });

  test('should display the signup form', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Sign up form' });

    await expect(
      form.getByRole('heading', { name: 'Create an account' })
    ).toBeVisible();

    await expect(form.getByLabel('First name')).toBeVisible();
    await expect(form.getByLabel('Last name')).toBeVisible();
    await expect(form.getByLabel('Occupation')).toBeVisible();
    await expect(form.getByLabel('Email')).toBeVisible();
    await expect(form.getByLabel('Password')).toBeVisible();

    await expect(
      form.getByRole('button', { name: 'Sign Up' })
    ).toBeVisible();
  });

  test('should show required errors when submitted empty', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Sign up form' });

    await form.getByRole('button', { name: 'Sign Up' }).click();

    await expect(page.getByText('First name is required')).toBeVisible();
    await expect(page.getByText('Last name is required')).toBeVisible();
    await expect(page.getByText('Occupation is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
  });

  test('should reject an invalid email', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Sign up form' });

    await form.getByLabel('First name').fill('John');
    await form.getByLabel('Last name').fill('Doe');
    await form.getByLabel('Occupation').fill('Engineer');
    await form.getByLabel('Email').fill('invalid-email');
    await form.getByLabel('Password').fill('password123');

    await form.getByRole('button', { name: 'Sign Up' }).click();

    await expect(
      page.getByText('Enter a valid email address')
    ).toBeVisible();
  });

  test('should reject a password shorter than 8 characters', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Sign up form' });

    await form.getByLabel('First name').fill('John');
    await form.getByLabel('Last name').fill('Doe');
    await form.getByLabel('Occupation').fill('Engineer');
    await form.getByLabel('Email').fill('john@example.com');
    await form.getByLabel('Password').fill('1234567');

    await form.getByRole('button', { name: 'Sign Up' }).click();

    await expect(
      page.getByText('Password must be at least 8 characters')
    ).toBeVisible();
  });

  test('should accept a password with exactly 8 characters', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Sign up form' });

    await form.getByLabel('First name').fill('John');
    await form.getByLabel('Last name').fill('Doe');
    await form.getByLabel('Occupation').fill('Engineer');
    await form.getByLabel('Email').fill('john@example.com');
    await form.getByLabel('Password').fill('12345678');

    await form.getByRole('button', { name: 'Sign Up' }).click();

    await expect(page.getByRole('status')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Hello John Doe' })).toBeVisible();
  });

  test('should display submitted user information after successful signup', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Sign up form' });

    await form.getByLabel('First name').fill('Jane');
    await form.getByLabel('Last name').fill('Smith');
    await form.getByLabel('Occupation').fill('Geologist');
    await form.getByLabel('Email').fill('jane@example.com');
    await form.getByLabel('Password').fill('password123');

    await form.getByRole('button', { name: 'Sign Up' }).click();

    const success = page.getByRole('status');

    await expect(success).toContainText('Hello Jane Smith');
    await expect(success).toContainText('Occupation: Geologist');
    await expect(success).toContainText('Email: jane@example.com');
  });

  test('should return to the signup form when Back is clicked', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Sign up form' });

    await form.getByLabel('First name').fill('Jane');
    await form.getByLabel('Last name').fill('Smith');
    await form.getByLabel('Occupation').fill('Geologist');
    await form.getByLabel('Email').fill('jane@example.com');
    await form.getByLabel('Password').fill('password123');

    await form.getByRole('button', { name: 'Sign Up' }).click();

    await page.getByRole('button', { name: 'Back' }).click();

    await expect(
      page.getByRole('form', { name: 'Sign up form' })
    ).toBeVisible();
  });

});