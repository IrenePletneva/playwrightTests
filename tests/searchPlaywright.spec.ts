import { test, expect } from '@playwright/test';

const searchButton = "//button[contains(@aria-label, 'Search')]";
const searchModal = "//div[contains(@class, 'DocSearch-Modal')]";
const searchInput = "//input[@type='search']";
const clearButton = "//button[contains(@aria-label, 'Clear')]";
const contentWrapper = "//div[contains(@class, 'DocSearch-Dropdown')]";
const seeAllButton = "//a[contains(@href, '/search?q=test')]";
const recentSearch = "//div[contains(@class, 'DocSearch-StartScreen')]";
const searchResultsPage = "//h1[contains(text(),'Search result')]";

test('Проверка функционала поиска', async ({ page }) => {
  await test.step('Открыть сайт Playwright', async () => {
    await page.goto('https://playwright.dev/');
  });

  await test.step('Кликнуть на кнопку Search', async () => {
    await page.locator(searchButton).click();
  });

  await test.step('Проверить дефолтное отображение элементов модалки', async () => {
    await expect(page.locator(recentSearch)).toBeVisible();
  });

  await test.step('Ввести текст и проверить состояние элементов поиска', async () => {
    await page.locator(searchInput).fill('test');
    await expect(page.locator(clearButton)).toBeVisible();
    await expect(page.locator(contentWrapper)).toBeVisible();
    await expect(page.locator(seeAllButton)).toBeVisible();
  });

  await test.step('Нажать на кнопку очистить и проверить модалку', async () => {
    await page.locator(clearButton).click();
    await expect(page.locator(searchModal)).toBeVisible();
  });

  await test.step('Ввести "test" и нажать "See all"', async () => {
    await page.locator(searchInput).fill('test');
    await page.locator(seeAllButton).click();
  });

  await test.step('Проверить, что открылась страница "Search result"', async () => {
    await expect(page.locator(searchResultsPage)).toBeVisible();
  });
});
