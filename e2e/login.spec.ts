import { test, expect, Page } from '@playwright/test';

// ===========
//  Pag Login
// ===========

test('usuário obrigatório', async ({ page }) => {
  await login(page, '', 'secret_sauce')
  await toast(page, 'Epic sadface: Username is required');
});

test('senha obrigatória', async ({ page }) => {
  await login(page,'standard_user', '')
  await toast(page, 'Epic sadface: Password is required')
})

test('Usuário não existe', async ({ page }) => {
  await login(page,'secret_sauce', 'standard_user')
  await toast(page, 'Epic sadface: Username and password do not match any user in this serv')
})

test('Login com sucesso', async ({ page }) => {
  await login(page,'standard_user', 'secret_sauce')
  await modal2(page)
})


// =====================
//  Functions Login page
// =====================

const toast = async (page: Page, message: string) => {
  const target = page.locator('[class="error-message-container error"]')
  await expect(target).toBeVisible()
  await expect(target).toHaveText(message)
}

const modal = async (page: Page, message: string) => {
  const target = page.locator('[id=shopping_cart_container]')
  await expect(target).toHaveText(message);
}

const modal2 = async (page: Page) => {
  const cart = page.locator('#shopping_cart_container')
  await expect(cart).toBeVisible()
}
const login = async (page: Page, user: string, pass: string) => {
    await page.goto('/')//Inicia o navegador na pagina connfigurada no arquivo playwright.config

    const username = page.locator('#user-name')
    const password = page.locator('#password')

    user 
      ? await username.fill(user) : null

    pass
      ? await password.fill(pass) : null

    await page.click('[id=login-button]')
}