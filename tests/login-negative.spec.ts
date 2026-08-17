import { test, expect } from '@playwright/test';

test.describe('Login - casos negativos', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

test('Login fallido con credenciales inválidas', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user1');
    await page.getByPlaceholder('Password').fill('secret_sauce1');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('Login fallido con campos vacíos', async ({ page }) => {

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
        page.getByText('Epic sadface: Username is required')
    ).toBeVisible();
});

});