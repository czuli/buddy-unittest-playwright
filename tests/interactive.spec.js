const { test, expect } = require('@playwright/test');

test.describe('Interactive elements tests', () => {
  test('form validates required fields', async ({ page }) => {
    await page.goto('/');
    
    // Spróbuj wysłać pusty formularz
    await page.click('#submit-btn');
    
    // Sprawdź czy pojawił się alert o wymaganych polach
    page.on('dialog', dialog => {
      expect(dialog.message()).toContain('Proszę wypełnić wszystkie wymagane pola');
      dialog.accept();
    });
  });

  test('mobile responsiveness', async ({ page }) => {
    await page.goto('/');
    
    // Sprawdź na desktop
    await expect(page.locator('#main-title')).toBeVisible();
    
    // Zmień na mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Sprawdź czy elementy są nadal widoczne
    await expect(page.locator('#main-title')).toBeVisible();
    await expect(page.locator('#click-me')).toBeVisible();
  });
});
