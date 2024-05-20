import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByText(
      'Instantly deploy your Next.js site to a shareable URL with Vercel.'
    )
  ).toBeVisible();
});
