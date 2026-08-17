import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login exitoso con usuario válido', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page.getByText('Products')).toBeVisible();
});