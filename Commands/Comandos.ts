// ==============================
//  COMANDOS
// ==============================
//
// Para iniciar o projeto do zero:
// npm init playwright@latest
//

//Iniciar testes com a interface gráfica do navegador visível:
// npx playwright test --headed
//

/********************************************************************
 * ✅ SELETORES DE ELEMENTOS: CSS vs XPATH
 * Este comentário explica o que é cada um, quando usar e boas práticas
 ********************************************************************/

/*
====================================================
1️⃣ O QUE É CSS SELECTOR
====================================================
CSS Selector é uma forma de localizar elementos HTML
usando a mesma sintaxe do CSS (usado para estilização).

✅ É o seletor MAIS recomendado no Playwright (e no mercado).
✅ Mais legível, simples e performático.
✅ Menos frágil a mudanças no HTML.

Exemplos comuns de CSS:
- div
- .classe
- #id
- div[role="alert"]
- button:has-text("Entrar")
*/

/*
====================================================
2️⃣ O QUE É XPATH
====================================================
XPath é uma linguagem específica para navegar na árvore HTML.

✅ Muito poderoso
❌ Mais complexo
❌ Mais frágil
❌ Menos legível
❌ Menor performance

XPath permite navegação "relativa":
- subir no DOM
- ir para irmãos
- contar índices

Exemplos comuns de XPath:
- //div
- //div[text()="Mensagem de erro"]
- //button[contains(text(),"Entrar")]
- //*[@id="login-button"]
*/

/*
====================================================
3️⃣ CSS vs XPATH — QUAL USAR?
====================================================
✅ BOA PRÁTICA DE MERCADO:
- Use CSS sempre que possível
- Use XPath SOMENTE quando não houver alternativa

Playwright recomenda oficialmente:
➡️ CSS Selectors + getByRole + getByText
*/

/*
====================================================
4️⃣ CSS É MELHOR PARA:
====================================================
✅ Localizar por:
- id
- class
- atributo
- role
- texto visível

✅ Exemplos recomendados:
*/
page.locator('div[role="status"]');
page.getByText('Informe o seu nome de usuário');
page.getByRole('button', { name: 'Entrar' });

/*
====================================================
5️⃣ QUANDO USAR XPATH (CASOS RAROS)
====================================================
XPath só é aceitável quando:
- Não existe id, class, role ou texto único
- É necessário navegar pela árvore DOM
- HTML é legado ou mal estruturado

❗ Mesmo assim, uso deve ser exceção
*/

/*
====================================================
6️⃣ EXEMPLO DE XPATH (NÃO RECOMENDADO)
====================================================
*/
page.locator('//div[text()="Informe o seu nome de usuário"]');

/*
====================================================
7️⃣ ERRO COMUM DE INICIANTES
====================================================
❌ Tentar transformar TEXTO em seletor
❌ Criar XPath muito longo e frágil
❌ Depender de hierarquia exata

Exemplo ruim:
*/
//div/form/div[2]/div/span

/*
====================================================
8️⃣ BOA PRÁTICA MODERNA (PLAYWRIGHT)
====================================================
✅ Testar como o usuário vê a tela
✅ Priorizar acessibilidade
✅ Menos acoplamento ao HTML

Formas recomendadas:
*/
page.getByText('Epic sadface: Username is required');
page.getByRole('alert');
page.getByRole('button', { name: 'Login' });

/*
====================================================
9️⃣ REGRA DE OURO PARA INSPEÇÃO DE ELEMENTOS
====================================================
1. Procure por role (acessibilidade)
2. Depois por texto visível
3. Depois por atributo estável
4. Evite XPath ao máximo
*/

/*
====================================================
🔟 RESUMO CONCEITUAL
====================================================
CSS Selector:
- Simples
- Rápido
- Legível
- RECOMENDADO ✅

XPath:
- Poderoso
- Complexo
- Frágil
- ÚLTIMA OPÇÃO ⚠️
*/

/********************************************************************
 * ✅ FRASE-CHAVE PARA GUARDAR
 *
 * "Teste como o usuário vê a tela, não como o HTML foi escrito."
 ********************************************************************/