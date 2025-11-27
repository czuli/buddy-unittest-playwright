const { test, expect } = require('@playwright/test');

test.describe('Additional examples', () => {
  test('checks main title exists', async ({ page }) => {
    await page.goto('/');
    
    // Check that main title is visible
    await expect(page.locator('#main-title')).toBeVisible();
  });

  // Uncomment these tests to see different failure scenarios:

  // test('fails - checks non-existent element', async ({ page }) => {
  //   await page.goto('/');
  //   // This will fail - element doesn't exist
  //   await expect(page.locator('#non-existent-element')).toBeVisible();
  // });

  // test('fails - checks incorrect text', async ({ page }) => {
  //   await page.goto('/');
  //   // This will fail - wrong text expected
  //   await expect(page.locator('#main-title')).toHaveText('Wrong Title');
  // });

  // test('fails - checks incorrect counter value', async ({ page }) => {
  //   await page.goto('/');
  //   await page.click('#click-me');
  //   // This will fail - counter shows 1, not 5
  //   await expect(page.locator('#counter')).toHaveText('5');
  // });

  // test('fails - checks incorrect form alert message', async ({ page }) => {
  //   await page.goto('/');
  //   await page.fill('#name', 'Test');
  //   await page.fill('#email', 'test@example.com');
  //   await page.click('#submit-btn');
  //   // This will fail - wrong message expected
  //   page.on('dialog', dialog => {
  //     expect(dialog.message()).toContain('Wrong message');
  //     dialog.accept();
  //   });
  // });

  // test('fails - checks incorrect CSS property', async ({ page }) => {
  //   await page.goto('/');
  //   // This will fail - wrong color expected
  //   const button = page.locator('#click-me');
  //   await expect(button).toHaveCSS('background-color', 'rgb(255, 0, 0)');
  // });

  // test('fails - checks element on non-existent page', async ({ page }) => {
  //   // This will fail - page doesn't exist
  //   await page.goto('/non-existent-page');
  //   await expect(page.locator('h1')).toBeVisible();
  // });

  // test('fails - checks incorrect attribute value', async ({ page }) => {
  //   await page.goto('/');
  //   // This will fail - wrong placeholder expected
  //   await expect(page.locator('#name')).toHaveAttribute('placeholder', 'Wrong placeholder');
  // });

  // test('fails - checks unchecked checkbox as checked', async ({ page }) => {
  //   await page.goto('/');
  //   // This will fail - checkbox is not checked by default
  //   await expect(page.locator('#recording-consent')).toBeChecked();
  // });

  // test('fails - timeout waiting for non-existent element', async ({ page }) => {
  //   await page.goto('/');
  //   // This will fail - element never appears
  //   await expect(page.locator('#never-appears')).toBeVisible({ timeout: 1000 });
  // });
});

