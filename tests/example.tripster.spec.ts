import { test, expect } from '@playwright/test';

test('Tripster Autorization', async ({ page }) => {
    await page.goto('https://experience.tripster.ru/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Необычные экскурсии от местных жителей/); // Проверяем, что в заголовке страницы есть слово
    await page.locator('//*[@data-test="login-link"]').click();
    await page.locator('//main[@class="modal__content"]//input[@type="email"]').fill('test@example.com');
 //   await page.locator('//input[@type="password"]').scrollIntoViewIfNeeded();
    await page.locator('//input[@type="password"]').fill('12345678');
  });
