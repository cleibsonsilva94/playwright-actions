import { test, expect, Page } from '@playwright/test';

test('usuário obrigatório', async ({ page }) => {
  await login(page, '', 'senha123')
  await toast(page, 'Epic sadface: Username is required');
});

test('senha obrigatória', async ({ page }) => {
  await login(page,'qa', '')
  await toast(page, 'Epic sadface: Password is required')
})

// test('usuário não existe', async ({ page }) => {
//   await login(page,'teste', 'teste')
//   await toast(page, 'Oops! Credenciais inválidas :(')
// })

// test('senha incorreta', async ({ page }) => {
//   await login(page,'qa', 'teste')
//   await toast(page, 'Oops! Credenciais inválidas :(')
// })

// test('com sucesso', async ({ page }) => {
//   await login(page,'qa', 'xperience')
//   await modal(page, 'Suas credenciais são válidas :)')
// })

const  toast = async (page: Page, message: string) => {
  const target = page.locator('.swal2-html-container')
}

const modal = async (page: Page, message: string) => {
  const target = page.locator('.swal2-html-container')
  await expect(target).toHaveText(message);
}

const login = async (page: Page, user: string, pass: string) => {
    await page.goto('/')//Inicia o navegador na pagina connfigurada no arquivo playwright.config

    const username = page.locator('[id=user-name]')
    const password = page.locator('[id=password]')

    user 
      ? await username.fill(user) : null

    pass
      ? await password.fill(pass) : null

    await page.click('[id=login-button]')
}