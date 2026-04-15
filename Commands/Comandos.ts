// ==============================
//  COMANDOS
// ==============================
//
/**
 * ▶ Executar TODOS os testes (headless - padrão, sem abrir navegador)
 * npx playwright test
 *
 * ▶ Executar TODOS os testes com navegador aberto
 * npx playwright test --headed
 *
 * ▶ Executar UM teste específico pelo nome
 * npx playwright test -g "Login com sucesso"
 *
 * ▶ Executar UM arquivo de teste específico
 * npx playwright test tests/login.spec.ts
 *
 * ▶ Abrir a interface gráfica do Playwright (UI Mode)
 * npx playwright test --ui
 */
//

// ==================================================
// ✅ GUIA PRÁTICO DE SELETORES – PLAYWRIGHT
// ==================================================
//
// Objetivo:
// - Servir como material de estudo
// - Evitar seletores frágeis
// - Priorizar boas práticas de mercado
//
// Regra geral:
// 👉 Teste como o usuário enxerga a tela
// 👉 Não teste a estrutura do HTML
// ==================================================



// ==================================================
// 1️⃣ SELETORES BÁSICOS CSS
// ==================================================

// Seleciona pela tag
page.locator('input');

// Seleciona pelo ID (MAIS ESTÁVEL)
page.locator('#login-button');
page.locator('[id="login-button"]');

// Seleciona pela classe
page.locator('.error-message');

// Tag + classe
page.locator('button.primary');

// ==================================================
// 2️⃣ SELETORES POR ATRIBUTO
// ==================================================

// Atributo exato
page.locator('[name="username"]');

// Atributo que CONTÉM valor
page.locator('[class*="error"]');

// Atributo que COMEÇA com valor
page.locator('[id^="user"]');

// Atributo que TERMINA com valor
page.locator('[id$="name"]');

// Múltiplos atributos (MUITO USADO)
page.locator('input[type="text"][name="username"]');



// ==================================================
// 3️⃣ SELETORES DE TEXTO (PLAYWRIGHT)
// ==================================================

// Texto visível na tela (RECOMENDADO)
page.getByText('Username is required');

// Texto parcial
page.getByText('Username', { exact: false });

// Texto dentro de um elemento específico
page.locator('div.error').getByText('Password');



// ==================================================
// 4️⃣ SELETORES POR ROLE (ACESSIBILIDADE) ⭐⭐⭐
// ==================================================
// 👉 BOA PRÁTICA MODERNA
// 👉 Mais próximo do comportamento do usuário

// Botão
page.getByRole('button', { name: 'Login' });

// Campo de texto
page.getByRole('textbox', { name: 'Username' });

// Alerta / Toast / Erro
page.getByRole('alert');

// Modal
page.getByRole('dialog');

// Link
page.getByRole('link', { name: 'Saiba mais' });



// ==================================================
// 5️⃣ COMBINAÇÃO DE SELETORES
// ==================================================

// Dentro de um container específico
page.locator('#login-form').locator('input[name="username"]');

// Usando has-text
page.locator('button:has-text("Entrar")');

// Elemento que CONTÉM outro elemento
page.locator('div:has(button)');



// ==================================================
// 6️⃣ SELETORES RELACIONAIS (CSS MODERNO)
// ==================================================

// Primeiro elemento
page.locator('li:first-child');

// Último elemento
page.locator('li:last-child');

// Elemento por índice (cuidado ⚠️)
page.locator('li').nth(0);



// ==================================================
// 7️⃣ BOAS PRÁTICAS PARA TESTES ESTÁVEIS
// ==================================================
//
// ✅ Prefira:
// - getByRole
// - getByText
// - id
// - atributos estáveis (data-testid)
//
// ❌ Evite:
// - Hierarquia profunda
// - Índices fixos
// - XPath
// - Classes geradas dinamicamente
//

// Exemplo BOM ✅
page.getByRole('button', { name: 'Login' });

// Exemplo RUIM ❌
page.locator('div > div > form > div:nth-child(2) > button');



// ==================================================
// 8️⃣ data-testid (IDEAL PARA AUTOMAÇÃO)
// ==================================================
// 👉 Criado exclusivamente para testes
// 👉 Não quebra com layout ou CSS

page.locator('[data-testid="login-button"]');
page.locator('[data-testid="error-message"]');



// ==================================================
// 9️⃣ XPATH (ÚLTIMA OPÇÃO ⚠️)
// ==================================================
//
// Use SOMENTE se:
// - HTML legado
// - Não há id, role, texto ou atributo estável

page.locator('//div[text()="Username is required"]');

// ❌ XPath longo é frágil
// ❌ Difícil de manter
// ❌ Menos legível



// ==================================================
// 🔟 RESUMO RÁPIDO (REGRA DE OURO)
// ==================================================
//
// 1. getByRole
// 2. getByText
// 3. id
// 4. atributo estável
// 5. data-testid
// 6. XPath (se não houver alternativa)
//
// "Se mudar o HTML e o teste quebrar,
//  provavelmente o seletor estava errado."
// ==================================================