import { test, expect } from '@playwright/test';

test.describe('Login', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should display the login form', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Log in form' });

    await expect(
      form.getByRole('heading', { name: 'Welcome back' })
    ).toBeVisible();

    await expect(form.getByLabel('Email')).toBeVisible();
    await expect(form.getByLabel('Password')).toBeVisible();

    await expect(
      form.getByRole('button', { name: 'Log In' })
    ).toBeVisible();
  });

  test('should not submit with empty fields', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Log in form' });

    await form.getByRole('button', { name: 'Log In' }).click();

    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
  });

  test('should reject an invalid email', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Log in form' });

    await form.getByLabel('Email').fill('invalid-email');
    await form.getByLabel('Password').fill('password123');

    await form.getByRole('button', { name: 'Log In' }).click();

    await expect(
      page.getByText('Enter a valid email address')
    ).toBeVisible();
  });

  test('should reject a password shorter than 8 characters', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Log in form' });

    await form.getByLabel('Email').fill('user@example.com');
    await form.getByLabel('Password').fill('1234567');

    await form.getByRole('button', { name: 'Log In' }).click();

    await expect(
      page.getByText('Password must be at least 8 characters')
    ).toBeVisible();
  });

  test('should accept a password with exactly 8 characters', async ({ page }) => {
    const form = page.getByRole('form', { name: 'Log in form' });

    await form.getByLabel('Email').fill('user@example.com');
    await form.getByLabel('Password').fill('12345678');

    await form.getByRole('button', { name: 'Log In' }).click();

    await expect(page).toHaveURL('/');
  });

 test('should mask the password field', async ({ page }) => {
  const password = page.getByLabel('Password');

  await expect(password).toHaveAttribute('type', 'password');
});
  
});