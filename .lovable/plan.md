## Objetivo

Refazer 100% do layout visual do site "A Arte do Yoga" clonando o tema **Zenyoga** (imagens enviadas), mantendo:
- Logomarca atual
- Categorias existentes (Prática, Filosofia, Bem-Estar, Meditação)
- Artigos existentes e suas URLs
- Estrutura de rotas atual (SPA React + páginas estáticas em `/public`)

Apenas o **visual (cores, fontes, componentes, layout, ícones, botões, cards, backgrounds, bordas)** será substituído pelo estilo Zenyoga.

## Direção visual clonada do Zenyoga

**Paleta de cores** (extraída das imagens):
- Fundo geral: branco puro `#FFFFFF`
- Fundo hero/seções suaves: rosa muito claro / lavanda `#FBF3F5` → `#F3EEF7` (gradiente sutil)
- Rodapé: azul-marinho profundo `#1E1E2C`
- Accent principal (badges, ícones, botões secundários): coral/salmão `#F4A28C`
- Accent secundário (botões CTA, links ativos): roxo `#5B2C91`
- Título de destaque: gradiente coral → lavanda-rosa (usado em "News & Article", "FAQ", "Contact us")
- Texto principal: cinza-escuro `#2D2D3A`
- Texto secundário: cinza `#6B6B7B`

**Tipografia**:
- Títulos: fonte sans-serif pesada e moderna (padrão Zenyoga — semelhante a **"Plus Jakarta Sans" / "DM Sans" Bold/ExtraBold**)
- Corpo: sans-serif humanista leve (**"Inter" / "DM Sans" Regular**)
- Substituir a Cormorant Garamond atual — o Zenyoga é 100% sans-serif

**Componentes visuais a clonar**:
- Header branco com logo à esquerda, menu horizontal centralizado/direita, ícones sociais redondos roxos à direita
- Hero de página interna: fundo rosa/lavanda claro, título grande com palavra em gradiente coral, subtítulo cinza centralizado, muito espaço vertical
- Cards de artigos: imagem topo com badge coral arredondada ("categoria"), corpo branco com título bold, resumo cinza, rodapé com data + "No Comments"
- Grid de artigos 3 colunas em desktop
- FAQ: cards com header em gradiente rosa/lavanda, ícone chevron/plus à direita
- Botões primários: pílula roxa `#5B2C91` com texto branco
- Rodapé: bg azul-marinho, 4 colunas (marca + descrição, Yoga Studio/endereço, Opening Hours com ícone coral, Photo Gallery com miniaturas grid 3x2), copyright na base com ícones sociais redondos escuros

## Escopo de arquivos

**Design tokens (base para tudo)**
- `src/index.css`: substituir toda paleta HSL, fontes, sombras, radius pelo sistema Zenyoga
- `tailwind.config.ts`: registrar novas fontes (Plus Jakarta Sans / DM Sans / Inter) e cores semânticas adicionais (coral, lavender, navy, ink)
- `index.html`: trocar `<link>` de Google Fonts para as novas famílias

**Componentes SPA (React)**
- `src/components/Header.tsx` — novo header estilo Zenyoga
- `src/components/Footer.tsx` — novo footer navy 4 colunas
- `src/components/HeroSection.tsx` — hero home com título gradiente + imagem yoga pose (usar `user-uploads://img_1.png`)
- `src/components/ArticleCard.tsx` — card estilo Zenyoga com badge coral
- `src/components/CategoryGrid.tsx` — grid de categorias com ícones circulares coral
- `src/pages/Index.tsx`, `Category.tsx`, `Article.tsx`, `About.tsx`, `Contact.tsx`, `FAQ.tsx`, `Search.tsx`, `Sitemap.tsx`, `PrivacyPolicy.tsx`, `TermsOfUse.tsx`, `CookiesPolicy.tsx` — aplicar novo layout (hero + seções) sem alterar dados/conteúdo/rotas

**Páginas estáticas (public/*.html)**
- `public/static-styles.css`: reescrever tokens/CSS para bater exatamente com o novo design (header, footer, hero, cards, FAQ, formulários)
- Os arquivos HTML em `public/**` mantêm estrutura/rotas; apenas o CSS externo é substituído, então recebem o novo visual automaticamente
- Ajustes pontuais nos HTMLs somente onde a marcação precisar de novas classes (badge coral em cards, gradiente em títulos)

**Imagens**
- Registrar `user-uploads://img_1.png` como asset via `lovable-assets` para uso em hero/seções

## O que NÃO muda

- Logomarca (`/assets/logo.png` e `/favicon.png`)
- Rotas, URLs canônicas e sitemap
- Conteúdo textual dos artigos, categorias e páginas
- Estrutura estática (páginas HTML em `/public/artigo/...`, `/public/categoria/...`)
- Meta tags SEO existentes
- GA/GTM e `.htaccess`

## Detalhes técnicos

- Todas as cores são gravadas como HSL em `:root` de `index.css` e referenciadas via tokens Tailwind (`bg-background`, `text-primary`, `bg-coral`, `bg-navy`, etc.) — nunca hex hardcoded em componentes.
- Duas fontes carregadas via Google Fonts com `display=swap` para evitar FOUT.
- O gradiente dos títulos é implementado como utilitário `.text-gradient-coral` em `@layer utilities`.
- `static-styles.css` (usado por todas as páginas HTML) usa as mesmas variáveis CSS para consistência entre SPA e estático.
- Layout responsivo preservado: grid de 3 colunas → 2 em tablet → 1 em mobile.

## Entregável desta etapa

Layout Zenyoga aplicado a todo o site (home, categorias, artigos, sobre, contato, FAQ, políticas, sitemap, busca), em SPA e páginas estáticas, com paleta rosa/coral/roxo/navy e tipografia sans-serif moderna. Nas próximas mensagens você envia mais imagens para refinar seções específicas.
