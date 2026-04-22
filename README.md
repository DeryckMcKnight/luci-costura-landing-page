# Luci - Costura & Modelagem Sob Medida

Landing page profissional para Lucimar Cristina Soares de Lima, costureira e modelista formada pelo SENAC.

## Sobre o Projeto

Este é um site elegante e minimalista que apresenta os serviços de costura sob medida, modelagem técnica e ajustes profissionais da Luci. O design segue a filosofia de minimalismo artesanal contemporâneo, com cores branco e púrpura, tipografia sofisticada e animações suaves ao scroll.

## Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Transições elegantes ao rolar a página usando Intersection Observer
- **Tipografia Sofisticada**: Playfair Display para títulos + Inter para corpo
- **Paleta de Cores**: Branco puro + Púrpura (#6B4C9A) + Cinza quente
- **Performance Otimizada**: Imagens comprimidas e código limpo
- **Acessibilidade**: Contraste adequado e navegação clara

## Seções

1. **Header** - Navegação fixa com links para todas as seções
2. **Hero** - Apresentação principal com imagem de destaque
3. **Sobre** - Informações sobre Lucimar e sua experiência
4. **Formação** - Cursos SENAC (Costureira e Modelista)
5. **Serviços** - Costura sob medida, modelagem técnica e ajustes
6. **Diferenciais** - Por que escolher a Luci
7. **Portfólio** - Galeria de trabalhos (desativada temporariamente)
8. **Contato** - Botões para WhatsApp, Email e Instagram
9. **Footer** - Informações finais

## Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização utilitária
- **Vite** - Build tool rápido
- **shadcn/ui** - Componentes UI prontos
- **Framer Motion** - Animações (preparado para uso)

## Instalação e Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview

# Verificar tipos TypeScript
pnpm check
```

## Estrutura do Projeto

```
client/
├── public/          # Arquivos estáticos (favicon, robots.txt)
├── src/
│   ├── components/  # Componentes reutilizáveis
│   │   ├── AnimatedSection.tsx
│   │   └── ui/      # shadcn/ui components
│   ├── hooks/       # Hooks customizados
│   │   └── useInView.ts
│   ├── pages/       # Páginas
│   │   └── Home.tsx
│   ├── App.tsx      # Componente raiz
│   ├── main.tsx     # Entrada React
│   └── index.css    # Estilos globais
└── index.html       # HTML principal
```

## Animações

- **Fade In**: Transição suave com opacidade
- **Fade In Left/Right**: Entrada lateral com movimento
- **Fade In Scale**: Entrada com zoom suave
- **Card Fade In**: Animação para cards individuais
- **Image Fade In**: Desfoque para clareza em imagens
- **Delays em Cascata**: Efeito escalonado para elementos

## Customização

### Cores
Edite as variáveis OKLCH em `client/src/index.css`:
- `--primary`: Púrpura principal
- `--background`: Fundo branco
- `--foreground`: Texto escuro

### Tipografia
As fontes estão importadas no `client/index.html`:
- Playfair Display (títulos)
- Inter (corpo)

### Imagens
As imagens estão hospedadas em CDN. Para atualizar:
1. Gere novas imagens ou faça upload
2. Atualize os URLs em `Home.tsx`

## Portfólio

A seção de portfólio está desativada temporariamente (classe `hidden`). Para reativar:
1. Remova a classe `hidden` da seção em `Home.tsx`
2. Atualize as URLs das imagens com as fotos reais da Luci
3. Remova a classe `hidden` dos divisores também

## Deploy

### GitHub Pages
Este projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

1. **Configuração Automática**: O workflow em `.github/workflows/deploy.yml` faz build e deploy automaticamente
2. **Ativar GitHub Pages**:
   - Vá para Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root

3. **Seu site estará disponível em**: `https://DeryckMcKnight.github.io/luci-costura-landing-page`

### Manus Hosting
O site também está disponível em: `https://lucicostura-dotcqvpj.manus.space`

## Contato

Para atualizações ou mudanças no site, entre em contato com o desenvolvedor.

## Licença

MIT
