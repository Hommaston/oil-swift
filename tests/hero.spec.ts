import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the hero content', async ({ page }) => {

    await expect(
      page.getByText('THE PROFESSIONAL NETWORK OF NIGERIA OIL & GAS')
    ).toBeVisible();

    await expect(
      page.getByText('Your Career,')
    ).toBeVisible();

    await expect(
      page.getByText('Your Industry,')
    ).toBeVisible();

    await expect(
      page.getByText(/One professional passport/)
    ).toBeVisible();
  });

  test('should display the Create Passport button', async ({ page }) => {

    await expect(
      page.getByRole('button', { name: 'Create Passport' })
    ).toBeVisible();

  });

  test('should display the Hiring button', async ({ page }) => {

    await expect(
      page.getByRole('button', { name: "I'm Hiring" })
    ).toBeVisible();

  });

  test('should display the hero image', async ({ page }) => {

    await expect(
      page.getByRole('img', { name: 'Engineers' })
    ).toBeVisible();

  });

});