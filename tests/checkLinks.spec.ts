import { test, expect } from '@playwright/test';

test('Проверка ссылок в футере', async ({ page }) => {
  await test.step('Открвть сайт playwright', async () => {
    await page.goto('https://playwright.dev/');
  });
  await test.step('Степ 1: Проверить ссылки для блока Learn', async () => {
    
    await expect(page.getByText('Getting started')).toHaveAttribute('href', '/docs/intro');
    await expect(page.getByText('Playwright Training')).toHaveAttribute('href', 'https://learn.microsoft.com/en-us/training/modules/build-with-playwright/');
    await expect(page.getByText('Learn Videos')).toHaveAttribute('href', '/community/learn-videos');
    await expect(page.getByText('Feature Videos')).toHaveAttribute('href', '/community/feature-videos');    
  });

  await test.step('Степ 2: Проверить ссылки для блока Community', async () => {
      
    await expect(page.getByText('Stack Overflow')).toHaveAttribute('href', 'https://stackoverflow.com/questions/tagged/playwright');
    await expect(page.getByText('Discord')).toHaveAttribute('href', 'https://aka.ms/playwright/discord');
    await expect(page.getByText('Twitter')).toHaveAttribute('href', 'https://twitter.com/playwrightweb');
    await expect(page.getByText('LinkedIn')).toHaveAttribute('href', 'https://www.linkedin.com/company/playwrightweb');
    
  });

  await test.step('Степ 3: Проверить ссылки для блока More', async () => {
      
    await expect(page.getByText('GitHub')).toHaveAttribute('href', 'https://github.com/microsoft/playwright');
    await expect(page.getByText('YouTube')).toHaveAttribute('href', 'https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg');
    await expect(page.getByText('Blog')).toHaveAttribute('href', 'https://dev.to/playwright');
    await expect(page.getByText('Ambassadors')).toHaveAttribute('href', '/community/ambassadors');
      });
});