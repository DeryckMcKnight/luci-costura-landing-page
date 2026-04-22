# Configuração do GitHub Pages

Este guia explica como configurar o GitHub Pages para este projeto React/Vite.

## Opção 1: Deploy Manual (Recomendado para Começar)

### Passo 1: Build Local
```bash
pnpm install
pnpm build
```

Isso criará uma pasta `dist/public` com os arquivos prontos para deploy.

### Passo 2: Deploy para GitHub Pages

#### Usando GitHub CLI:
```bash
gh repo deploy --source=dist/public --branch=gh-pages
```

#### Ou manualmente:
1. Vá para: https://github.com/DeryckMcKnight/luci-costura-landing-page/settings/pages
2. Em "Source", selecione: **Deploy from a branch**
3. Escolha a branch: **gh-pages** e pasta: **/ (root)**
4. Clique em Save

Seu site estará disponível em: `https://DeryckMcKnight.github.io/luci-costura-landing-page`

## Opção 2: Deploy Automático com GitHub Actions

Para automatizar o deploy a cada push:

### Passo 1: Autorizar Workflows
1. Vá para: https://github.com/DeryckMcKnight/luci-costura-landing-page/settings/actions
2. Em "Actions permissions", selecione: **Allow all actions and reusable workflows**
3. Clique em Save

### Passo 2: Criar o Workflow
1. Crie uma pasta `.github/workflows` no repositório
2. Crie um arquivo `deploy.yml` com o conteúdo abaixo:

```yaml
name: Build and Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist/public'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Passo 3: Configurar GitHub Pages
1. Vá para: https://github.com/DeryckMcKnight/luci-costura-landing-page/settings/pages
2. Em "Source", selecione: **GitHub Actions**
3. Clique em Save

Agora, a cada push para `main`, o site será automaticamente construído e deployado!

## Verificar o Deploy

Após qualquer um dos métodos acima:
1. Vá para: https://github.com/DeryckMcKnight/luci-costura-landing-page/actions
2. Você verá um workflow em execução
3. Quando terminar, visite: `https://DeryckMcKnight.github.io/luci-costura-landing-page`

## Troubleshooting

### Site não aparece após deploy
- Aguarde 5-10 minutos (GitHub Pages pode levar um tempo)
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se a branch `gh-pages` foi criada

### Erro 404
- Verifique se a pasta `dist/public` foi criada corretamente
- Confirme que o "Source" está apontando para a branch correta

### Build falha
- Verifique se `pnpm install` rodou sem erros
- Confirme que `pnpm build` funciona localmente
- Verifique os logs do GitHub Actions

## Dicas

- **Desenvolvimento Local**: Use `pnpm dev` para testar localmente
- **Preview Build**: Use `pnpm preview` para testar a build localmente
- **Atualizações**: Basta fazer push para `main` e o site será atualizado automaticamente
- **Domínio Customizado**: Você pode adicionar um domínio customizado nas configurações do GitHub Pages

## Referências

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
