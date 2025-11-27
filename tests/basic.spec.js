const { test, expect } = require('@playwright/test');

test.describe('Basic page tests', () => {
  test('page loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Sprawdź tytuł strony
    await expect(page).toHaveTitle(/Test Playwright/);
    
    // Sprawdź główny nagłówek
    await expect(page.locator('#main-title')).toBeVisible();
    await expect(page.locator('#main-title')).toHaveText('Witaj na stronie testowej!');
  });

  // test('form works correctly', async ({ page }) => {
  //   await page.goto('/');
    
  //   // Wypełnij formularz
  //   await page.fill('#name', 'Jan Kowalski');
  //   await page.fill('#email', 'jan@example.com');
  //   await page.fill('#message', 'To jest testowa wiadomość');
    
  //   // Sprawdź czy pola są wypełnione
  //   await expect(page.locator('#name')).toHaveValue('Jan Kowalski');
  //   await expect(page.locator('#email')).toHaveValue('jan@example.com');
  //   await expect(page.locator('#message')).toHaveValue('To jest testowa wiadomość');
    
  //   // Wyślij formularz
  //   await page.click('#submit-btn');
    
  //   // Sprawdź czy pojawił się alert
  //   page.on('dialog', dialog => {
  //     expect(dialog.message()).toContain('Dziękujemy Jan Kowalski');
  //     dialog.accept();
  //   });
  // });

  test('counter button works', async ({ page }) => {
    await page.goto('/');
    
    // Sprawdź początkowy stan licznika
    await expect(page.locator('#counter')).toHaveText('0');
    
    // Kliknij przycisk kilka razy
    await page.click('#click-me');
    await page.click('#click-me');
    await page.click('#click-me');
    
    // Sprawdź czy licznik się zwiększył
    await expect(page.locator('#counter')).toHaveText('3');
  });

  // test('text toggle works', async ({ page }) => {
  //   await page.goto('/');
    
  //   // Sprawdź czy tekst jest ukryty na początku
  //   await expect(page.locator('#toggle-content')).toHaveClass(/hidden/);
    
  //   // Kliknij przycisk przełączania
  //   await page.click('#toggle-text');
    
  //   // Sprawdź czy tekst jest widoczny
  //   await expect(page.locator('#toggle-content')).toBeVisible();
  //   await expect(page.locator('#toggle-text')).toHaveText('Ukryj tekst');
    
  //   // Kliknij ponownie
  //   await page.click('#toggle-text');
    
  //   // Sprawdź czy tekst jest ukryty
  //   await expect(page.locator('#toggle-content')).toHaveClass(/hidden/);
  //   await expect(page.locator('#toggle-text')).toHaveText('Przełącz tekst');
  // });

  // test('navigation works', async ({ page }) => {
  //   await page.goto('/');
    
  //   // Sprawdź czy linki nawigacyjne są widoczne
  //   await expect(page.locator('nav a[href="#home"]')).toBeVisible();
  //   await expect(page.locator('nav a[href="#about"]')).toBeVisible();
  //   await expect(page.locator('nav a[href="#contact"]')).toBeVisible();
    
  //   // Kliknij na link "O nas"
  //   page.on('dialog', dialog => {
  //     expect(dialog.message()).toContain('Kliknięto link: #about');
  //     dialog.accept();
  //   });
    
  //   await page.click('nav a[href="#about"]');
  // });

  test('alert works', async ({ page }) => {
    await page.goto('/');
    
    // Ustaw obsługę alertu
    page.on('dialog', dialog => {
      expect(dialog.message()).toBe('To jest testowy alert!');
      dialog.accept();
    });
    
    // Kliknij przycisk alertu
    await page.click('#show-alert');
  });

  // test('form validation prevents submission with invalid email format', async ({ page }) => {
  //   await page.goto('/');
    
  //   // Wypełnij formularz z nieprawidłowym formatem emaila
  //   await page.fill('#name', 'Test User');
  //   await page.fill('#email', 'invalid-email-format');
  //   await page.fill('#message', 'Test message');
    
  //   // Próba wysłania formularza
  //   await page.click('#submit-btn');
    
  //   // Sprawdź czy formularz został zablokowany przez walidację HTML5
  //   // Oczekujemy, że pole email będzie miało atrybut :invalid
  //   const emailField = page.locator('#email');
  //   await expect(emailField).toHaveAttribute('aria-invalid', 'true');
    
  //   // Sprawdź czy nie pojawił się alert potwierdzający wysłanie
  //   // (to powinno failować, bo formularz prawdopodobnie się wyśle mimo błędnego emaila)
  //   const dialogPromise = page.waitForEvent('dialog', { timeout: 1000 });
  //   const dialog = await dialogPromise;
  //   expect(dialog.message()).not.toContain('Dziękujemy');
  //   dialog.accept();
  // });
});
