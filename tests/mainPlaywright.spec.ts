import { test, expect } from '@playwright/test';

const getStartedButton = "//a[contains(text(),'Get started')]";
const apiMenu = "//nav//a[contains(text(),'API')]";
const documentationHeader = "//h1[contains(text(),'Installation')]";
const apiReferenceHeader = "//h1[contains(text(),'Playwright Library')]";

test('Проверка кликабельности элементов', async ({ page }) => {
  await test.step('Открыть сайт Playwright', async () => {
    await page.goto('https://playwright.dev/');
  });

  await test.step('Кликнуть на кнопку Get Started', async () => {
    await page.locator(getStartedButton).click();
  });

  await test.step('Проверить, что открылась страница с документацией', async () => {
    await expect(page.locator(documentationHeader)).toBeVisible();
  });

  await test.step('Вернуться на главную страницу', async () => {
    await page.goto('https://playwright.dev/');
  });

  await test.step('Кликнуть на пункт меню API', async () => {
    await page.locator(apiMenu).click();
  });

  await test.step('Проверить, что открылась страница с API', async () => {
    await expect(page.locator(apiReferenceHeader)).toBeVisible();
  });
});
