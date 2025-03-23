import { test, expect } from '@playwright/test';

test('Заполнение формы Text Box', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.locator('//*[@id="userName"]').fill('Иван Иванов'); // Имя
  await page.locator('//*[@id="userEmail"]').fill('ivan.ivanov@example.com'); // Email
  await page.locator('//*[@id="currentAddress"]').fill('Москва, ул. Пушкина, д. 10'); // Текущий адрес
  await page.locator('//*[@id="permanentAddress"]').fill('Санкт-Петербург, Невский пр., д. 25'); // Постоянный адрес

  await page.locator('//*[@id="submit"]').click();

  // ассерты
  await expect(page.locator('//*[@id="output"]')).toBeVisible();
  await expect(page.locator('//p[@id="name"]')).toContainText('Иван Иванов');
  await expect(page.locator('//p[@id="email"]')).toContainText('ivan.ivanov@example.com');
  await expect(page.locator('//p[@id="currentAddress"]')).toContainText('Москва, ул. Пушкина, д. 10');
  await expect(page.locator('//p[@id="permanentAddress"]')).toContainText('Санкт-Петербург, Невский пр., д. 25');
});
