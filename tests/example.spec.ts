import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.bigbasket.com/?utm_source=google&utm_medium=cpc&utm_campaign=Brand-PAN-Jan25&gad_source=1&gclid=Cj0KCQiAz6q-BhCfARIsAOezPxntZrk9Q7ISNy1cQIWDUkIKim1ThgxfOcg0erIzqZizjZTrnqsQf9saAjWoEALw_wcB');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
