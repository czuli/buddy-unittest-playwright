const { test, expect } = require('@playwright/test');

test.describe('Recording form tests', () => {

  test('recording form works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Wypełnij formularz nagrania
    await page.fill('#recording-title', 'Test nagrania');
    await page.fill('#recording-duration', '10');
    await page.selectOption('#recording-quality', '1080p');
    await page.check('input[name="recording-format"][value="mp4"]');
    await page.fill('#recording-description', 'Opis testowego nagrania');
    await page.check('#recording-consent');
    
    // Sprawdź czy pola są wypełnione
    await expect(page.locator('#recording-title')).toHaveValue('Test nagrania');
    await expect(page.locator('#recording-duration')).toHaveValue('10');
    await expect(page.locator('#recording-quality')).toHaveValue('1080p');
    await expect(page.locator('input[name="recording-format"][value="mp4"]')).toBeChecked();
    await expect(page.locator('#recording-consent')).toBeChecked();
    
    // Wyślij formularz
    await page.click('#recording-submit-btn');
    
    // Sprawdź czy pojawił się status nagrania
    await expect(page.locator('#recording-status')).toBeVisible();
    await expect(page.locator('#recording-info')).toContainText('Rozpoczynanie nagrania: Test nagrania');
  });

  test('recording form validates required fields', async ({ page }) => {
    await page.goto('/');
    
    // Spróbuj wysłać pusty formularz
    await page.click('#recording-submit-btn');
    
    // Sprawdź czy pojawił się alert o wymaganych polach
    page.on('dialog', dialog => {
      expect(dialog.message()).toContain('Proszę wypełnić wszystkie wymagane pola i zaakceptować zgodę');
      dialog.accept();
    });
  });
});
