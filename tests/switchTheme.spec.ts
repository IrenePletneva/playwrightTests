import { test, expect } from '@playwright/test';

const themeToggleButtonLocator = "//button[contains(@title, 'Switch between dark and light mode')]";

test('Переключение темы', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await test.step('Переключаем на другую тему', async () => {
    await page.locator(themeToggleButtonLocator).click();
  });

  await test.step('Проверка изменения переключения темы после переключения', async () => {
    const htmlElement = page.locator('html');
    const newTheme = await htmlElement.getAttribute('data-theme');
    expect(newTheme).toBe('dark');
  });

  await test.step('Переключаем обратно на исходную тему', async () => {
    await page.locator(themeToggleButtonLocator).click();
  });

  await test.step('Проверка возврата color-scheme после второго переключения', async () => {
    const htmlElement = page.locator('html');
    const newTheme = await htmlElement.getAttribute('data-theme');
    expect(newTheme).toBe('light');
  });
});